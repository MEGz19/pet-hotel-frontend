import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddOwnerForm from '../AddOwnerForm/AddOwnerForm';
import OwnerList from '../OwnerList/OwnerList';

class ManageOwners extends Component {

    render() {
        return (
            <div>
                <AddOwnerForm />
                <OwnerList />
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