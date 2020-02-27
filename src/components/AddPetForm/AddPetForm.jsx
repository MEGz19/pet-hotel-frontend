// name
// color
// breed
// drop down
// button
import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddPetForm extends Component {

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
export default AddPetForm;