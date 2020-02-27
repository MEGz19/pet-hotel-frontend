import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Nav extends Component {

    goOwners = () => {
        this.props.history.push('/owners')
    }

    goPets = () => {
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <button onClick={this.goPets}>dashboard</button>
                <button onClick={this.goOwners}>manage owners</button>
            </div>
        )
    }
}

const putStateOnProps = (reduxState) => {
    return {
        reduxState
    }
}

// export default connect(putStateOnProps)(Nav);
export default withRouter(connect(putStateOnProps)(Nav));