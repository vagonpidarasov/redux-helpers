import {ReducerTestSuiteType} from './reducer-test-suite.type';
import {ReducerType} from './reducer.type';
import {Action} from './action.interface';
/**
 * Returns a test suite which should test some basic reducer features
 * @param {ReducerType<S>} reducer
 * @param {S} state
 * @param {Action} action
 * @returns {ReducerTestSuiteType}
 */
export function ReducerTestSuite<S>(reducer:ReducerType<S>, state:S, action:Action):ReducerTestSuiteType {
    return function() {
        const unknownAction:Action = {type: 'unknown'};
        let initialState:S;
        let expectedState:S;

        beforeEach(() => {
            initialState = Object.assign({}, state);
        });

        it('should create initial state in response to a unknown action', () => {
            expectedState = reducer(null, unknownAction);
            expect(expectedState).toBeDefined();
        });

        it('should create initial state in response to a known action', () => {
            expectedState = reducer(null, action);
            expect(expectedState).toBeDefined();
        });

        it('should not return source state in response to a known action', () => {
            expectedState = reducer(initialState, action);
            expect(expectedState).not.toBe(initialState);
        });

        it('should return source state in response to a unknown action', () => {
            expectedState = reducer(initialState, unknownAction);
            expect(expectedState).toBe(initialState);
        });
    };
}
