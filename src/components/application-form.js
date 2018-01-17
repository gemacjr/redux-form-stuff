import React, { Component } from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
import { Multiselect } from 'react-widgets';
import classnames from 'classnames';
import 'react-widgets/dist/css/react-widgets.css';

const scopes = [
    { scopes: 'openid', value: 'openid'},
    { scopes: 'profile', value: 'profile'},
    { scopes: 'email', value: 'email'},
    { scopes: 'image', value: 'image'}
]

class ApplicationForm extends Component {


    renderField = ({ input, label, type, meta: { touched, error }}) => (
        <div >
            <label>{label}</label>
            <input {...input} placeholder={label} type={type}/>
            {touched && error && <span className="error">{error.message}</span>}
        </div>
    )

    renderMultiselect = ({ input, data, valueField, textField }) => (
        <Multiselect
            {...input}
            onBlur={() => input.onBlur()}
            value={input.value || []}
            data={data}
            valueField={valueField}
            textField={textField}
        />
    )

    render(){
        const { handleSubmit, pristine, submitting, loading } = this.props;

        return(
            <div>
                <div>
                    <form onSubmit={handleSubmit} loading={loading}>
                        <div>
                            <label>Client Id</label>
                        <div>
                        <Field name="client_id" type="text" component={this.renderField} />
                        </div>
                        </div>
                        <div>
                            <label>Scopes:</label>
                            <div>
                            <Field
                                name="scopes"
                                component={this.renderMultiselect}
                                data={scopes}
                                textField="scopes"
                                valueField="value"
                            />
                            </div>
                            </div>
                            <button type="submit" disabled={pristine || submitting }>Register</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default reduxForm({form: 'application'})(ApplicationForm);