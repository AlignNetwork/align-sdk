{
  "name": "@align-network/align-sdk",
  "version": "1.3.0",
  "author": "0xglu",
  "main": "./src/index.js",
  "types": "./types/src/index.d.ts",
  "typings": "./types/src/index.d.ts",
  "sideEffects": false,
  "type": "module",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/AlignNetwork/align-sdk.git"
  },
  "tsup": {
    "entry": [
      "./src/**/*.ts"
    ],
    "clean": true,
    "format": [
      "esm"
    ],
    "sourcemap": true,
    "sideEffects": false,
    "dts": true
  },
  "exports": {
    ".": {
      "types": "./types/src/index.d.ts",
      "default": "./src/index.js"
    },
    "./read": {
      "types": "./types/src/read/index.d.ts",
      "default": "./src/read/index.js"
    }
  },
  "scripts": {
    "prepare": "husky",
    "build": "tsc --project tsconfig.json --declaration --declarationMap --declarationDir ./types && cp package.json README.md ",
    "dev": "npm run build --watch",
    "test": "source .env && mocha"
  },
  "devDependencies": {
    "@commitlint/cli": "^19.2.2",
    "@commitlint/config-conventional": "^19.2.2",
    "@pinata/sdk": "^2.1.0",
    "@semantic-release/changelog": "^6.0.3",
    "@semantic-release/git": "^10.0.1",
    "@types/bun": "latest",
    "@types/chai": "^4.3.16",
    "@types/mocha": "^10.0.6",
    "chai": "^5.1.1",
    "husky": "^9.0.11",
    "mocha": "^10.4.0",
    "semantic-release": "^23.0.8",
    "ts-node": "^10.9.2",
    "viem": "^2.9.23"
  },
  "peerDependencies": {
    "typescript": "^5.0.0"
  },
  "peerDependenciesMeta": {
    "typescript": {
      "optional": true
    }
  },
  "description": "Align Attestation Station SDK",
  "homepage": "https://align.network",
  "license": "MIT",
  "private": false,
  "publishConfig": {
    "access": "public",
    "registry": "https://registry.npmjs.org/"
  },
  "dependencies": {
    "@tanstack/react-query": "^5.31.0",
    "fastestsmallesttextencoderdecoder": "^1.0.22",
    "rimraf": "^5.0.5",
    "vm-browserify": "^0.0.4"
  },
  "mocha": {
    "extension": [
      "ts"
    ],
    "node-option": [
      "experimental-specifier-resolution=node",
      "loader=ts-node/esm"
    ],
    "require": [
      "ts-node/register"
    ],
    "spec": "test/**/*.ts",
    "watch-files": [
      "src/**/*.ts",
      "test/**/*.ts"
    ],
    "watch-ignore": [
      "node_modules"
    ]
  }
}
