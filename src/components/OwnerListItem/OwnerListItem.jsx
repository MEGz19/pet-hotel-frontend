import React, { Component } from 'react';
import { connect } from 'react-redux';

class OwnerListItem extends Component {

    deleteOwner = () => {
        console.log('trying to delete', this.props.owner.name);
    }

    render() {
        return (
            <>
                <tr id={this.props.owner.id}>
                    <td>{this.props.owner.name}</td>
                    <td>{this.props.owner.id}</td>
                    <button onClick={this.deleteOwner}>delete</button>
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

export default connect(putStateOnProps)(OwnerListItem);
