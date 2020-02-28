import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddOwnerForm extends Component {

    state = {
        newOwner: {
            name: ''
        }
    }

    makeNewOwner = (event, propertyValue) => {
        console.log('typing:', this.state.newOwner);
        this.setState({
            newOwner: {
                ...this.state.newOwner,
                [propertyValue]: event.target.value
            }
        })
    };

    submitNewOwner = () => {
        console.log('submitting new owner:', this.state.newOwner);
        this.props.dispatch({
            type: 'SUBMIT_OWNER',
            payload: this.state.newOwner
        })
    };

    render() {
        return (
            <div>
                <input type="text" placeholder="name" onChange={(event) => this.makeNewOwner(event, 'name')}></input>
                <button onClick={this.submitNewOwner}>add owner</button>
                <br></br>
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