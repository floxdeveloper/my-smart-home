import {Action} from './action';
import { State } from './state';

export class Thing {
    name = '';
    primaryAction: Action;
    actions: Action[];
    primaryState: State;
    states: State[];
}
