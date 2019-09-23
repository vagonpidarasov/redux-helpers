#!/bin/bash
rm index.d.ts
touch index.d.ts
echo "export * from './lib/index';" > index.d.ts
