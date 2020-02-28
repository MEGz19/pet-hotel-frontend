import React, { Component } from 'react';
import AddPetForm from '../AddPetForm/AddPetForm';
import PetList from '../PetList/PetList';

class Dashboard extends Component {

    render() {
        return (
            <div>
                <AddPetForm />
                <PetList />
            </div>
        )
    }
}

export default Dashboard;