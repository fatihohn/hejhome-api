import { ApiClient } from "./api-client";
import { AES256 } from "./lib/aes256";
export declare class TokenAPI {
    private apiClient;
    aes256: AES256;
    clientId: string;
    clientSecret: string;
    username: string;
    password: string;
    constructor(apiClient: ApiClient);
    getToken(): Promise<any>;
    refreshToken(refreshToken: string): Promise<any>;
}
