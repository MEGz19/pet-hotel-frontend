import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Nav extends Component {

    render() {
        return (
            <div>
                <button>dashboard</button>
                <button>manage owners</button>
            </div>
        )
    }
}

export default Nav;

// const putStateOnProps = (reduxState) => {
//     return {
//         reduxState
//     }
// }

// export default connect(putStateOnProps)(Nav);
// export default withRouter(connect(putStateOnProps)(Nav));