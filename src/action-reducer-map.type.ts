import {ReducerType} from './reducer.type';
export type ActionReducerMapType<S> = Map<string, ReducerType<S>>;
