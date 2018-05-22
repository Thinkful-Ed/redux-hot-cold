import reducer from './reducer';
import {
	restartGame, 
	makeGuess, 
	generateAuralUpdate} 
	from './actions';

describe('Reducer', () => {

    it('Should make a guess', () => {
            // Fix the correct answer so we know what we're aiming for
            let state = {
                guesses: [],
                feedback: '',
                correctAnswer: 7
            };

            state = reducer(state, makeGuess(99));
            expect(state.guesses).toEqual([99]);
            expect(state.feedback).toEqual("You're Ice Cold...");

            state = reducer(state, makeGuess(50));
            expect(state.guesses).toEqual([99, 50]);
            expect(state.feedback).toEqual("You're Cold...");

            state = reducer(state, makeGuess(30));
            expect(state.guesses).toEqual([99, 50, 30]);
            expect(state.feedback).toEqual("You're Warm.");

            state = reducer(state, makeGuess(16));
            expect(state.guesses).toEqual([99, 50, 30, 16]);
            expect(state.feedback).toEqual("You're Hot!");

            state = reducer(state, makeGuess(7));
            expect(state.guesses).toEqual([99, 50, 30, 16, 7]);
            expect(state.feedback).toEqual('You got it!');
        });
});

   