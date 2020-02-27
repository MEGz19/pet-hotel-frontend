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
                <p>this is where the owner list will go</p>
                {this.props.reduxState.getOwnersReducer.map(owner => {
                    return <OwnerListItem id="ownerListItem" key={owner} owner={owner} />
                })}
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