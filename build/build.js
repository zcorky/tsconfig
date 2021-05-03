#!/bin/env node
const fs = require('fs');
const path = require('path');
const json5 = require('json5');

const files = {
  json5: path.join(__dirname, '..', 'tsconfig.json5'),
  json: path.join(__dirname, '..', 'tsconfig.json'),
};

async function build() {
  const rawConfig = await fs.promises.readFile(files.json5, 'utf-8');
  const data = json5.parse(rawConfig);
  const jsonString = JSON.stringify(data, null, 2);

  await fs.promises.writeFile(files.json, jsonString);
}

build();