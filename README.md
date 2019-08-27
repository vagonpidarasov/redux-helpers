# yet-another-redux-helpers
## overview
This package exports a set of useful types and helpers for redux store of your app.

Compatible with typescript, angular and react.

## installation  
```npm i -S yet-another-redux-helpers```

## development
`npm i && npm run build`

## types

### `Action`
Provides an interface to describe an action with optional typed payload.

### `ReducerType`
Provides a type to describe a reducer.

## helpers
### `toPayload`
Extracts payload from action.

### `reduce`
Provides a utility function to reduce your state. Features:
- creates empty state (using state factory) if no state is provided
- does not mutate state, creates new state based on previous one
- reduces state using provided reducer map

## test helpers
Package also export one test helper for unit testing your reducers.

### `ReducerTestSuite`
Tests if your reducer comply with the redux paradigm:
- should create initial state in response to a unknown action if the source state is not defined
- should create initial state in response to a known action if the source state is not defined
- should not return source state in response to a known action, but should return new state
- should return source state in response to an unknown action

## usage
### implementation
```typescript
import {Action, ReducerType, reduce} from 'yet-another-redux-helpers';
import {State} from './state';
import {ACTION_TYPE} from './action-types';
import {someReducer} from './reducers';

// declare action type
export const ACTION_TYPE = 'some-action';

// declare action
export class SomeAction implements Action {
    readonly type = ACTION_TYPE;
    constructor(public payload:any) {}
}

// declare state
export class State {
    value:number = 0;
}

// declare reducer
export function someReducer(state:State, action:SomeAction):State {
    state.value = 1;
    return state;
}

// declare reducer map
export const actionReducerMap = new Map<string, ReducerType<State>>([
    [ACTION_TYPE, someReducer],
]);

// create reducer
export function reducer(state:State, action:Action):State {
    return reduce<State>(
        () => new State(),
        actionReducerMap,
        state,
        action,
    );
}
```

### testing
```typescript
import {ReducerTestSuite} from 'yet-another-redux-helpers';
import {State} from './state';
import {someReducer} from './reducer';
import {SomeAction} from './actions';

describe('SomeReducer', ReducerTestSuite(
    someReducer,
    new State(),
    new SomeAction()
));

```
