import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';

class StreamForm extends React.Component {

    returnError({error, touched}) {
        if(touched && error) {
            return (
                <div className="ui error message">
                    <div className="ui header">
                        {error}
                    </div>
                </div>
            );
        }
    }

    renderInput = ({input, label, meta}) => {
        const fieldClass = `field ${meta.error && meta.touched ? 'error':''}`;
        return (
            <div className={fieldClass}>
                <label>{label}</label>
                <input {...input}
                    autoComplete="off"
                />
                {this.returnError(meta)}
            </div>
        );
    }

    // submit the form with all form values
    onSubmit = formValues => {
        this.props.onSubmit(formValues);
    };

    render() {
        return (
            <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name="title" component={this.renderInput} label="Enter Title"/>
                <Field name="description" component={this.renderInput} label="Enter Description"/>
                <button className="ui button primary">Submit</button>
                <Link className="ui button" to="/">Cancel</Link>
            </form>
        );
    }
}

const validate = (formProps) => {
    const errors = {};
    if(!formProps.title) {
        errors.title = "Please enter a title."
    }

    if(!formProps.description) {
        errors.description = "Please enter a description."
    }

    return errors;
};




export default reduxForm({
    form: 'streamForm',
    validate
}) (StreamForm);