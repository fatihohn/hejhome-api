export declare class AES256 {
    private readonly appKey;
    private readonly algorithm;
    constructor(appKey: string);
    encrypt(text: string): string;
    decrypt(cipherText: string): string;
    base64urlWithPadding: (data: Buffer) => string;
}
