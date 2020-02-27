import React, { Component } from 'react';
import { connect } from 'react-redux';

class ManageOwners extends Component {

    render() {
        return (
            <div>
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

// export default connect(putStateOnProps)(ManageOwners);
export default ManageOwners;