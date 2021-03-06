import React, { Component } from 'react';
import { HashRouter as Router, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class Complete extends Component {

    state = {
        // feedbackForm: [{
        //     feelingInput: null,
        //     understandingInput: null,
        //     supportInput: null,
        //     commentInput: '',
        // }]
    }

    resetInputs = () => {
        this.props.history.push('/');
        this.props.dispatch({ type: "RESET_INPUTS" });
    }

    render() {
        return (
            <>

                <h2>Thank you for your time!</h2>

                <p>Your data has been submitted into our database. Thank you for taking part of our program.</p>

                <NavLink to='/'><button onClick={this.resetInputs}>Take another survey</button></NavLink>

            </>
        );
    }
}

export default connect()(Complete);