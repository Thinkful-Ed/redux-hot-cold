import React from 'react';
import {connect} from 'react-redux';

import './guess-count.css';

export function GuessCount(props) {
    return (
        <p role="status" aria-live="polite" aria-atomic="true">
            Guess #<span id="count">{props.count}</span>!
        </p>
    );
}

const mapStateToProps = state => ({
    count: state.guesses.length
});

export default connect(mapStateToProps)(GuessCount);
