// owner
// pet
// breed
// color
// checked-in
// actions
import React, { Component } from 'react';
import { connect } from 'react-redux';

class PetList extends Component {

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
export default PetList;