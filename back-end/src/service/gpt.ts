"use strict";
import { Configuration, OpenAIApi } from "openai";
import dotenv from "dotenv";
dotenv.config();

export interface responseApi {
  title: string;
  message: string;
}

const apikey = process.env.OPENAI_API_KEY ?? "";

const configuration = new Configuration({
  apiKey: apikey,
});

const openai = new OpenAIApi(configuration);
const format: responseApi = {
  title: "titulo do tema",
  message: "frase de amor",
};

export async function createNewQuery(prompt: string): Promise<string> {
  let concatMessage =
    "Crie um frase sobre ( " +
    prompt +
    " ) nesse formato " +
    JSON.stringify(format);

  const responseIA = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: concatMessage,
    max_tokens: 2048,
    temperature: 1,
  });
  console.log(concatMessage);

  return String(responseIA.data.choices[0].text);
}
