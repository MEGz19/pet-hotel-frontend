// name
// number of pets
// delete
import React, { Component } from 'react';
import { connect } from 'react-redux';
import OwnerListItem from '../OwnerListItem/OwnerListItem';

class OwnerList extends Component {

    componentDidMount() {
        this.props.dispatch({ type: 'GET_OWNERS' });
    }

    render() {
        return (
            <div>
                <table>
                    <thead>
                        <th>owner's name</th>
                        <th>number of pets</th>
                        <th>actions</th>
                    </thead>
                {this.props.reduxState.getOwnersReducer.map(owner => {
                    return <OwnerListItem id="ownerListItem" key={owner} owner={owner} />
                })}
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

export default connect(putStateOnProps)(OwnerList);
// export default OwnerList;