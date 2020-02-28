import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddPetForm extends Component {

    state = {
        newPet: {
            name: '',
            color: '',
            breed: '',
            owner: '',
        }
    }

    makeNewPet = (event, propertyValue) => {
        console.log('typing:', this.state.newPet);
        this.setState({
            newPet: {
                ...this.state.newPet,
                [propertyValue]: event.target.value
            }
        })
    };

    submitNewPet = () => {
        console.log('submitting new:', this.state.name);
        this.props.dispatch({
            type: 'SUBMIT_PET',
            payload: this.state.newPet
        })
    };

    render() {
        return (
            <div>
                <input type="text" placeholder="name" onChange={(event) => this.makeNewPet(event, 'name')} />
                <input type="text" placeholder="color" onChange={(event) => this.makeNewPet(event, 'color')} />
                <input type="text" placeholder="breed" onChange={(event) => this.makeNewPet(event, 'breed')} />
                <label for="owner"> owner: </label>
                <select name="owner" id="owner" placeholder="owner">owner
                    {this.props.reduxState.getOwnersReducer.map(owner => {
                        return (
                            <option value={owner.id} onChange={(event) => this.makeNewPet(event, 'owner')}>{owner.name}</option>
                        )})}
                </select>
                <button onClick={this.submitNewPet}>add pet</button>
            </div >
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

export default connect(putStateOnProps)(AddPetForm);