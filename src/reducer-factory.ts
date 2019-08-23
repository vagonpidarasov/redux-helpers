import {ActionReducerMapType} from './action-reducer-map.type';
import {StateFactoryType} from './state-factory.type';
import {Action} from './action.interface';

export function reduce<S>(
    stateFactory:StateFactoryType<S>,
    actionReducerMap:ActionReducerMapType<S>,
    state:S,
    action:Action,
):S {
    const originalState = state || stateFactory();
    const actionReducer = actionReducerMap.get(action.type);
    return actionReducer ?
        actionReducer(Object.assign(stateFactory(), originalState), action) :
        originalState;
}
