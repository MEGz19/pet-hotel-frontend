import React, { Component } from 'react';
import { connect } from 'react-redux';

class OwnerListItem extends Component {

    render() {
        return (
            <div>
                <li>{this.props.reduxState.getOwnersReducer}</li>
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
// export default OwnerListItem;