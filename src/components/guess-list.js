import React from 'react';
import {connect} from 'react-redux';

import './guess-list.css';

export function GuessList(props) {
    const guesses = props.guesses.map((guess, index) => (
        <li key={index}>
            <span className="visually-hidden">Guess #{index + 1} was </span>{guess}
        </li>
    ));

    return (
        <ul role="status" aria-live="polite" aria-atomic="true" id="guessList" className="guessBox clearfix">
            {guesses}
        </ul>
    );
};

const mapStateToProps = state => ({
        guesses: state.guesses
});
export default connect(mapStateToProps)(GuessList);
