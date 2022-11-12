# gqlRequest

Tiny `0.38 KiB / gzip: 0.24 KiB` zero dep (runtime) graphql requester for typed document nodes based on fetch.
Types for variables and result are inferred from the query document.

## Installation

```
pnpm i gql-client-fetch
pnpm i -D @graphql-typed-document-node/core
```

## Generate documents

```
pnpm i -D graphql @graphql-typed-document-node/core @graphql-codegen/cli @graphql-codegen/typescript @graphql-codegen/typescript-operations @graphql-codegen/typed-document-node
```

Add `codegen.cjs` to root

```
module.exports = {
  overwrite: true,
  schema: {
    'https://storeapi.jetshop.io:': {
      headers: {
        shopid: 'demostore',
        token: '359fd7c1-8e72-4270-b899-2bda9ae6ef57',
      },
    },
  },
  documents: 'src/**/*.gql',
  generates: {
    'src/graphql-operations.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typed-document-node'
      ],
    },
  },
};
```

Add script to `package.json`

```
"generate": "pnpm graphql-codegen --config codegen.cjs"
```
