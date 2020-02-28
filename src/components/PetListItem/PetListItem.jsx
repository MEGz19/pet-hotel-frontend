import React, { Component } from 'react';
import { connect } from 'react-redux';

class PetListItem extends Component {

    deletePet = () => {
        console.log('trying to delete', this.props.pet.pet);
    }

    render() {
        return (
            <>
                <tr id={this.props.pet.id}>
                <td>{this.props.pet.owner}</td>
                <td>{this.props.pet.pet}</td>
                <td>{this.props.pet.breed}</td>
                <td>{this.props.pet.color}</td>
                <td>{this.props.pet.checked_in}</td>
                <button onClick={this.deletePet}>delete</button>
                </tr>
            </>
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

export default connect(putStateOnProps)(PetListItem);
// export default PetListItem;