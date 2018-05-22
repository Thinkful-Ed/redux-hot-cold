import {
    RESTART_GAME,
    restartGame,
    MAKE_GUESS,
    makeGuess,
    generateAuralUpdate,
    GENERATE_AURAL_UPDATE
} from './actions';

describe('makeGuess', () => {
    it('Should return the action', () => {
        const guess = 10;
        const action = makeGuess(guess);
        expect(action.type).toEqual(MAKE_GUESS);
        expect(action.guess).toEqual(guess);
    });
});

describe('restartGame', () => {
    it('Should return the action', () => {
        const correctAnswer = 10;
        const action = restartGame(correctAnswer);
        expect(action.type).toEqual(RESTART_GAME);
        expect(action.correctAnswer).toEqual(correctAnswer);
    });
});

