import {generateAuralUpdate, restartGame, makeGuess} from './actions';
import {hotColdRedux} from './reducer';


describe('hotColdRedux', () =>{
    //set up dummy data
    const guess1 = '22';
    const guess2 = '55';
    const answer1 = '55';
    const answer2 = '100';

    it('Should set initial state when empty', () => {
        const state= hotColdRedux(undefined, {type: '_UNKNOWN'});
        expect(state.correctAnswer).toBeGreaterThan(0);
        delete state.correctAnswer;
        expect(state).toEqual({
            guesses: [],
            feedback: 'Make your guess!',
            auralStatus: ''
        })
    })

 
})


describe('generateAuralUpdate', ()=> {
    it('Should generate an update every guess', () => {
        const state = hotColdRedux(undefined, generateAuralUpdate())
        console.log(state.auralStatus.trim());
       expect(state.auralStatus.trim().indexOf("Here's ")).toEqual(0)

})
    it('Should return status after first guess', () =>{
        let state;
        state={
            guesses: [1,2,3]
        }
        state = hotColdRedux(state, generateAuralUpdate())
        expect(state.auralStatus.trim().indexOf("In")).toEqual(74)
    })
})


describe('restartGame', ()=> {
    it('Should generate a new answer on restart', () => {
        let state;
        state={
            guesses:[1,2,3]
        }
        state = hotColdRedux(state, restartGame())
        expect(state.auralStatus.trim().indexOf("")).toEqual(0)
    })
})


describe('makeGuess', ()=> {
    it('Should return feedback for every guess', () => {
        let state;
        state={
            guesses:[],
            correctAnswer:33
        }
        state = hotColdRedux(state, makeGuess(33))
        expect(state.feedback).toEqual('You got it!')
        state = hotColdRedux(state, makeGuess(44))
        expect(state.feedback).toEqual("You're Warm.")
        state = hotColdRedux(state, makeGuess(65))
        expect(state.feedback).toEqual("You're Cold...")
        state = hotColdRedux(state, makeGuess(99))
        expect(state.feedback).toEqual("You're Ice Cold...")

    })
})