import React, { Component } from 'react';
import { connect } from 'react-redux';

class PetListItem extends Component {

    render() {
        return (
            <div>
                <tr>
                <td>{this.props.pet.owner}</td>
                <td>{this.props.pet.name}</td>
                <td>{this.props.pet.breed}</td>
                <td>{this.props.pet.color}</td>
                <td>{this.props.pet.checkedin}</td>
                <button>delete</button>
                </tr>
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

export default connect(putStateOnProps)(PetListItem);
// export default PetListItem;