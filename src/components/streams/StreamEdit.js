import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import {fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';


class StreamEdit extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    onSubmit = (formValues) => {
        this.props.editStream(this.props.match.params.id, formValues);
    };

    render() {
        if(!this.props.stream) {
            return <div>Loading...</div>;
        }

        if(!this.props.isSignedIn) {
            return (
                <div className="ui error message">
                <div className="ui header">
                    <span>Please sign in to edit.</span>
                </div>
            </div>
            );
        }

        return (
            <div>
                <h3>Edit a Stream</h3>
                <StreamForm
                    initialValues={_.pick(this.props.stream, 'title', 'description')}
                    onSubmit={this.onSubmit} 
                 />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id],
        isSignedIn: state.auth.isSignedIn
    }; 
};


export default connect(mapStateToProps, {fetchStream, editStream}) (StreamEdit);