#!/usr/bin/env node

import fs from "fs";
import path from "path";

const filePath = path.resolve() + "/.env";

const envContents = fs.readFileSync(filePath, "utf8");

let envExampleContents = "";
for (const line of envContents.split("\n")) {
  if (line) {
    const newLine = line.split("=")[0] + "=\n";
    envExampleContents = envExampleContents += newLine;
  }
}

fs.writeFileSync(path.resolve() + "/.env.example", envExampleContents);
console.log(
  `.env keys in ${path.resolve() + "/.env"} have been copied into ${path.resolve() + "/.env.example"}`,
);
