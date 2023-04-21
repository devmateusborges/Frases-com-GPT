"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/service/gpt.ts
var gpt_exports = {};
__export(gpt_exports, {
  createNewQuery: () => createNewQuery
});
module.exports = __toCommonJS(gpt_exports);
var import_openai = require("openai");
var import_dotenv = __toESM(require("dotenv"));
import_dotenv.default.config();
var apikey = process.env.OPENAI_API_KEY ?? "";
var configuration = new import_openai.Configuration({
  apiKey: apikey
});
var openai = new import_openai.OpenAIApi(configuration);
var format = {
  title: "titulo do tema",
  message: "frase de amor"
};
async function createNewQuery(prompt) {
  let concatMessage = "Crie um frase sobre ( " + prompt + " ) nesse formato " + JSON.stringify(format);
  const responseIA = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: concatMessage,
    max_tokens: 2048,
    temperature: 1
  });
  console.log(concatMessage);
  return String(responseIA.data.choices[0].text);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  createNewQuery
});
