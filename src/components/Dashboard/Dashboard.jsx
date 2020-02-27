import React, { Component } from 'react';
import { connect } from 'react-redux';

class Dashboard extends Component {

    render() {
        return (
            <div>
                {/* add pet form */}
                {/* pet table */}
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
export default Dashboard;