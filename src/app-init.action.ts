import {Action} from './action.interface';
export const APP_INIT = 'INIT';
export class AppInit implements Action {
    static type = APP_INIT;
    readonly type = APP_INIT;
}
