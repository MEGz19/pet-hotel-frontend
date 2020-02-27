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
                <input type="text" placeholder="name"/>
                <input type="text" placeholder="color"/>
                <input type="text" placeholder="breed"/>
                <select>owner</select>
                <button>add pet</button>
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