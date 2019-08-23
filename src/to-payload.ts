import {Action} from './action.interface';
export function toPayload<T = any>(action:Action):T {
    return <T>action.payload;
}
