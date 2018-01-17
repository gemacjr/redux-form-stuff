import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import { newApplication, saveApplication } from '../actions/application-actions';
import ApplicationForm from '../components/application-form';

class ApplicationFormPage extends Component {

    state = {
        redirect: false
    }

    componentDidMount(){
        this.props.newApplication();
    }

    submit = (application) => {
        return this.props.saveApplication(application)
            .then((response) => {
                alert("Registration Access Token " + response.action.payload.data.registration_access_token)
                this.setState({ redirect:true })
            })
            .ctach(err => {
                throw new SubmissionError(this.props.errors)
            })
    }

    render(){
        return(
            <div>
                {
                    this.state.redirect ?
                    <Redirect to="/" /> :
                    <ApplicationForm
                        application={this.props.application}
                        loading={this.props.loading}
                        onSubmit={this.submit} />
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        contact: state.applicationStore.contact,
        errors: state.applicationStore.errors
    }
}

export default connect(mapStateToProps, {newApplication, saveApplication})(ApplicationFormPage);