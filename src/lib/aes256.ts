import * as crypto from "crypto";

export class AES256 {
  private readonly appKey: string;
  private readonly algorithm: string;

  constructor(appKey: string) {
    this.algorithm = "aes-256-cbc";
    this.appKey = appKey;
  }

  encrypt(text: string): string {
    const key = Buffer.from(this.appKey.slice(0, 32), "utf-8");
    const iv = Buffer.from(this.appKey.slice(0, 16), "utf-8");
    const cipher = crypto.createCipheriv(this.algorithm, key, iv);

    const encrypted = Buffer.concat([
      cipher.update(text, "utf8"),
      cipher.final(),
    ]);

    return this.base64urlWithPadding(encrypted);
  }

  decrypt(cipherText: string): string {
    const key = Buffer.from(this.appKey.slice(0, 32), "utf-8");
    const iv = Buffer.from(this.appKey.slice(0, 16), "utf-8");
    const decipher = crypto.createDecipheriv(this.algorithm, key, iv);

    const decrypted = Buffer.concat([
      decipher.update(Buffer.from(cipherText, "base64url")),
      decipher.final(),
    ]);

    return decrypted.toString("utf8");
  }

  base64urlWithPadding = (data: Buffer): string => {
    const base64url = data.toString("base64url");
    const paddingNeeded = (4 - (base64url.length % 4)) % 4;
    return base64url + "=".repeat(paddingNeeded);
  };
}

