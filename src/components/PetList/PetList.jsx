// owner
// pet
// breed
// color
// checked-in
// actions
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PetListItem from '../PetListItem/PetListItem';

class PetList extends Component {

    componentDidMount() {
        this.props.dispatch({ type: 'GET_PETS' });
    }

    render() {
        return (
            <div>
                <table>
                    <thead>
                        <th>owner</th>
                        <th>pet</th>
                        <th>breed</th>
                        <th>color</th>
                        <th>checked-in</th>
                        <th>actions</th>
                    </thead>
                    <tbody>
                        {/* <PetListItem /> */}
                        <p>this is where the pet list will go</p>
                    </tbody>
                </table>
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

export default connect(putStateOnProps)(PetList);
// export default PetList;