// name
// number of pets
// delete
import React, { Component } from 'react';
import { connect } from 'react-redux';

class OwnerList extends Component {

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

// export default connect(putStateOnProps)(Dashboard);
export default OwnerList;