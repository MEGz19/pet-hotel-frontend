import React, { Component } from 'react';
import { connect } from 'react-redux';

class OwnerListItem extends Component {

    render() {
        return (
            <div>
                <tr>{this.props.reduxState.getOwnersReducer}</tr>
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
