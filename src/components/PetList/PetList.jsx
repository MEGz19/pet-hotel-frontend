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
                    </tbody>
                </table>
            </div>
        )
    }
}

// const putStateOnProps = (reduxState) => {
//     return (
//         {
//             reduxState
//         }
//     )
// }

// export default connect(putStateOnProps)(Dashboard);
export default PetList;