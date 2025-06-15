import { AES256 } from "./lib/aes256";
export class TokenAPI {
    apiClient;
    aes256;
    clientId;
    clientSecret;
    username;
    password;
    constructor(apiClient) {
        this.apiClient = apiClient;
        this.aes256 = new AES256(apiClient.appKey);
        this.clientId = apiClient.clientId;
        this.clientSecret = apiClient.clientSecret;
        this.username = apiClient.username;
        this.password = apiClient.password;
    }
    getToken() {
        return this.apiClient.post("openapi/token", {
            data: this.aes256.encrypt(JSON.stringify({
                client_id: this.clientId,
                client_secret: this.clientSecret,
                grant_type: "password",
                username: this.username,
                password: this.password,
            })),
        });
    }
    refreshToken(refreshToken) {
        if (!refreshToken) {
            throw new Error("Refresh token is required");
        }
        return this.apiClient.post("openapi/token/refresh", {
            data: this.aes256.encrypt(JSON.stringify({
                client_id: this.clientId,
                client_secret: this.clientSecret,
                grant_type: "refresh_token",
                refresh_token: refreshToken,
            })),
        });
    }
}
