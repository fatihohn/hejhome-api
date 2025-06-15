import fetch from "node-fetch";
export class ApiClient {
    baseUrl;
    clientId;
    clientSecret;
    username;
    password;
    appKey;
    constructor(options) {
        this.baseUrl = options.baseUrl;
        this.clientId = options.clientId;
        this.clientSecret = options.clientSecret;
        this.appKey = options.appKey;
        this.username = options.username;
        this.password = options.password;
    }
    async get(endpoint) {
        const response = await fetch(`${this.baseUrl}/${endpoint}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    }
    async post(endpoint, data) {
        const response = await fetch(`${this.baseUrl}/${endpoint}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: data ? JSON.stringify(data) : undefined,
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    }
}
