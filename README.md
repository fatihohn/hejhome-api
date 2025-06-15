# Hejhome (GoQual) API library

A Node.js & TypeScript library for interacting with the HejHome (GoQual) API, supporting home automation integrations.

## Features

- AES256 encryption utilities
- API client for HejHome endpoints
- Token management for authentication
- Written in TypeScript, supports both ESM and CommonJS

## Installation

```bash
npm install hejhome-api
```

## Usage

```typescript
import { AES256, ApiClient, TokenAPI } from "hejhome-api";

// Example: Encrypt data
const encrypted = AES256.encrypt("your-data", "your-key");

// Example: Initialize API client
const client = new ApiClient({ /* config */ });

// Example: Use TokenAPI
const token = await TokenAPI.getToken({ /* credentials */ });
```

## API

### AES256

- `AES256.encrypt(data: string, key: string): string`
- `AES256.decrypt(encrypted: string, key: string): string`

### ApiClient

- Main class for making requests to HejHome API endpoints.

### TokenAPI

- Static methods for token management and authentication.

## Scripts

- `npm run build` – Compile TypeScript to JavaScript
- `npm run dev` – Development mode with watch
- `npm test` – Run tests with Jest

## Requirements

- Node.js >= 20
