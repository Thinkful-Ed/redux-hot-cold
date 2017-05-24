import React from 'react';
import {connect} from 'react-redux';

import GuessForm from './guess-form';

import './guess-section.css';

export function GuessSection(props) {
    return (
        <section aria-live="polite" role="status" aria-atomic="true">
            <a href="#userGuess"><h2 id="feedback" >{props.feedback}</h2></a>
            <GuessForm />
        </section>
    );
}

const mapStateToProps = state => ({
    feedback: state.feedback
});

export default connect(mapStateToProps)(GuessSection);
