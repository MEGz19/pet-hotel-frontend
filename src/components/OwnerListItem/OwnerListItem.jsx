import React, { Component } from 'react';
import { connect } from 'react-redux';

class OwnerListItem extends Component {

    deleteOwner = () => {
        console.log('trying to delete', this.props.owner.name);
    }

    render() {
        return (
            <div>
                <tr id={this.props.owner.id}>
                    <td>{this.props.owner.name}</td>
                    <button onClick={this.deleteOwner}>delete</button>
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

export default connect(putStateOnProps)(OwnerListItem);
