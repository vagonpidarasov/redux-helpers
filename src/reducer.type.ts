import {Action} from './action.interface';
export type ReducerType<S> = (state:S|null, action:Action) => S;
