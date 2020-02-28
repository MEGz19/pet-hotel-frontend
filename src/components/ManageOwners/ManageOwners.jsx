import React, { Component } from 'react';
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

export default ManageOwners;