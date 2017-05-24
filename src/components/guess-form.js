import React from 'react';
import {connect} from 'react-redux';

import {makeGuess} from '../actions';

import './guess-form.css';

export class GuessForm extends React.Component {
    submitGuess(event) {
        event.preventDefault();
        const value = this.input.value;
        this.props.dispatch(makeGuess(value));
    }

    render() {
        return (
            <form onSubmit={e => this.submitGuess(e)}>
                <label htmlFor="userGuess">Enter your Guess</label>
                <input type="number" name="userGuess" id="userGuess"
                    className="text" min="1" max="100" maxLength="3" autoComplete="off"
                    placeholder={Math.round(Math.random() * 100)} required
                    ref={input => this.input = input} />
                <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
            </form>
        );
    }
};


const mapStateToProps = state => ({
    guessCount: state.guesses.length,
    correctAnswer: state.correctAnswer
});

export default connect(mapStateToProps)(GuessForm);
