import { PostParameter } from './post-parameter';
import { OpenhabRestService } from './../service/openhab-rest.service';
import { Injectable } from '@angular/core';

@Injectable()
export class Action {
    name = '';
    postParameter: PostParameter;

    constructor (name: string, postParameter: PostParameter, private openhabRestService: OpenhabRestService) {
        this.name = name;
        this.postParameter = postParameter;
    }

    /**
     * run
     */
    public run() {
        this.openhabRestService.post(this.postParameter.requestUrl, this.postParameter.body, this.postParameter.httpOptions);
    }
}
