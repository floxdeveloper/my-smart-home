export class State {
    name = '';
    resource = '';
    value = '';

    constructor (name: string, ressource: string, value: string) {
        this.name = name;
        this.resource = ressource;
        this.value = value;
    }
}
