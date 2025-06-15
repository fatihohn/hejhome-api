import { ApiClient } from "./api-client";
import { AES256 } from "./lib/aes256";

export class TokenAPI {
  aes256: AES256;
  clientId: string;
  clientSecret: string;
  username: string;
  password: string;

  constructor(private apiClient: ApiClient) {
    this.aes256 = new AES256(apiClient.appKey);
    this.clientId = apiClient.clientId;
    this.clientSecret = apiClient.clientSecret;
    this.username = apiClient.username;
    this.password = apiClient.password;
  }

  getToken(): Promise<any> {
    return this.apiClient.post("openapi/token", {
      data: this.aes256.encrypt(
        JSON.stringify({
          client_id: this.clientId,
          client_secret: this.clientSecret,
          grant_type: "password",
          username: this.username,
          password: this.password,
        })
      ),
    });
  }

  refreshToken(refreshToken: string): Promise<any> {
    if (!refreshToken) {
      throw new Error("Refresh token is required");
    }
    return this.apiClient.post("openapi/token/refresh", {
      data: this.aes256.encrypt(
        JSON.stringify({
          client_id: this.clientId,
          client_secret: this.clientSecret,
          grant_type: "refresh_token",
          refresh_token: refreshToken,
        })
      ),
    });
  }
}
