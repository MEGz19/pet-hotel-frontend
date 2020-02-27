import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddOwnerForm extends Component {

    state = {
        name: ''
    }

    makeNewOwner = (event, propertyValue) => {
        console.log('typing:', this.state.name);
        this.setState({
            name: {
                ...this.state.name,
                [propertyValue]: event.target.value
            }
        })
    };

    submitNewOwner = () => {
        console.log('submitting new:', this.state.name);
        this.props.dispatch({
            type: 'SUBMIT_OWNER',
            payload: this.state.name
        })
    };

    render() {
        return (
            <div>
                <input type="text" placeholder="name" onChange={this.makeNewOwner}></input>
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
// export default AddOwnerForm;