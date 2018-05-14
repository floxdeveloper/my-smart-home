export class PostParameter {
    requestUrl = '';
    body = '';
    httpOptions;

    constructor (requestUrl: string, body: string, httpOptions) {
        this.requestUrl = requestUrl;
        this.body = body;
        this.httpOptions = httpOptions;
    }
}
