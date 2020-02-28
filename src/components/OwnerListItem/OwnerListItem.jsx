import React, { Component } from 'react';
import { connect } from 'react-redux';

class OwnerListItem extends Component {

    render() {
        return (
            <div>
                <tr>
                    <td>{this.props.owner.name}</td>
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

export default connect(putStateOnProps)(OwnerListItem);
