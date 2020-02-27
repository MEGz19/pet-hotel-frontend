import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddOwnerForm extends Component {

    state = {
        owner: {
            name: ''
        }
    }

    makeNewOwner = (event, propertyValue) => {
        console.log('typing:', this.state.owner);
        this.setState({
            owner: {
                ...this.state.owner,
                [propertyValue]: event.target.value
            }
        })
    };

    submitNewOwner = () => {
        console.log('submitting new:', this.state.owner);
        this.props.dispatch({
            type: 'SUBMIT_OWNER',
            payload: this.state.owner
        })
    };

    render() {
        return (
            <div>
                <input type="text" placeholder="name" onChange={(event) => this.makeNewOwner(event, 'name')}></input>
                <button onClick={this.submitNewOwner}>add owner</button>
            </div>
        )
    }
}

const putStateOnProps = (reduxState) => {
    return (
        {
            reduxState
        }
    )
}

export default connect(putStateOnProps)(AddOwnerForm);