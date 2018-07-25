import {RESTART_GAME, restartGame, MAKE_GUESS, makeGuess, generateAuralUpdate, GENERATE_AURAL_UPDATE} from './actions'



describe('restartGame', ()=>{
    it('Should generate create a new game', () =>{
       const correctAnswer = "4"
       const action = restartGame(correctAnswer);
       expect(action.type).toEqual(RESTART_GAME);  
       expect(action.correctAnswer).toEqual(correctAnswer);  
    })
})

describe('makeGuess', ()=>{
    it('Should make a new guess', () =>{
        const guess = "22"
        const action = makeGuess(guess);
        expect(action.type).toEqual(MAKE_GUESS);
        expect(action.guess).toEqual(guess);
    })  
})