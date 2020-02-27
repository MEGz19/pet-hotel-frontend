// name
// button
import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddOwnerForm extends Component {

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
export default AddOwnerForm;