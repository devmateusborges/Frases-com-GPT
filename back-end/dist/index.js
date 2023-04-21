"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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

// src/index.ts
var import_express2 = __toESM(require("express"));
var import_body_parser = __toESM(require("body-parser"));
var import_cors = __toESM(require("cors"));

// src/routes.ts
var import_express = require("express");

// src/service/gpt.ts
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

// src/routes.ts
var router = (0, import_express.Router)();
router.get("/", (req, res) => {
  res.json({ status: 200, response: "Api Live" });
});
router.post("/gpt", async (req, res) => {
  const { prompt } = req.body;
  const responseGPT = await createNewQuery(prompt);
  res.json({ status: 200, response: responseGPT });
});
var routes_default = router;

// src/index.ts
var dotenv2 = __toESM(require("dotenv"));
dotenv2.config();
var app = (0, import_express2.default)();
app.use(import_body_parser.default.json());
app.use((0, import_cors.default)());
app.use(routes_default);
app.listen(process.env.PORT, () => {
  console.log("Servidor Online", process.env.PORT);
});
