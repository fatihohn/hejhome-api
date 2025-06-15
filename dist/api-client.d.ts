export declare class ApiClient {
    baseUrl: string;
    clientId: string;
    clientSecret: string;
    username: string;
    password: string;
    appKey: string;
    constructor(options: {
        baseUrl: string;
        clientId: string;
        clientSecret: string;
        appKey: string;
        username: string;
        password: string;
    });
    get(endpoint: string): Promise<any>;
    post(endpoint: string, data: any): Promise<any>;
}
