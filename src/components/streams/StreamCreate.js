import React from 'react';
import {connect} from 'react-redux';
import {createStream} from '../../actions';
import StreamForm from './StreamForm';

class StreamCreate extends React.Component {
    // submit the form with all form values
    onSubmit = formValues => {
        this.props.createStream(formValues);
    };

    render() {
        if(!this.props.isSignedIn) {
            return (
                <div className="ui error message">
                <div className="ui header">
                    <span>Please sign in to create a new stream.</span>
                </div>
            </div>
            );
        }
        return (
                <div>
                    <h3>Create a Stream</h3>
                    <StreamForm onSubmit={this.onSubmit} />
                </div>
            );
    }
}

const mapStateToProps = state => {
    return {
        isSignedIn: state.auth.isSignedIn
    }; 
};


export default connect(mapStateToProps, {createStream})(StreamCreate);