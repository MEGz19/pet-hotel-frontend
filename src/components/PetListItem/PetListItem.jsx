import React, { Component } from 'react';
import { connect } from 'react-redux';

class PetListItem extends Component {

    render() {
        return (
            <div>
                <tr>
                    {/* {this.props.reduxState.getPetsReducer} */}
                    {JSON.stringify(this.props.pet)}
                </tr>
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

export default connect(putStateOnProps)(PetListItem);
// export default PetListItem;