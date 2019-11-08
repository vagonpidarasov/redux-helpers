import {Action} from './action.interface';
export const classActionMiddleware = () => (next:(a:Action) => Action) => (action:Action) => {
    next(Object.assign({}, action, {
        type: action.type,
        payload: action.payload
    }));
};
