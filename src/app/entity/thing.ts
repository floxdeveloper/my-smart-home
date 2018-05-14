import {Action} from './action';
import { State } from './state';

export class Thing {
    name = '';
    icon = '';
    primaryAction: Action;
    actions: Action[];
    primaryState: State;
    states: State[];

    constructor(name: string, icon: string, primaryAction: Action, actions: Action[], primaryState: State, states: State[]) {
        this.name = name;
        this.icon = icon;
        this.primaryAction = primaryAction;
        this.actions = actions;
        this.primaryState = primaryState;
        this.states = states;
    }

    /**
     * runPrimaryAction
     */
    public runPrimaryAction() {
        this.primaryAction.run();
    }

    /**
     * runAction
     */
    public runAction(action: Action) {
        action.run();
    }
}
