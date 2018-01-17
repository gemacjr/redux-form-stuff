import React, { Component } from 'react';
import { connect } from 'react-redux';
import ApplicationList from '../components/application-list';
import { fetchApplications } from '../actions/application-actions';

class ApplicationListPage extends Component {

    componentDidMount(){
        this.props.fetchApplications();
    }

    render(){
        return(
            <div>
                <h1>Application</h1>
                <ApplicationList application={this.props.applications}/>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        applications : state.applicationStore.applications
    }
}

export default connect(mapStateToProps, { fetchApplications})(ApplicationListPage);