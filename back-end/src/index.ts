import express, { Application } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import router from "./routes";
import * as dotenv from "dotenv";
dotenv.config();
const app: Application = express();

app.use(bodyParser.json());
app.use(cors());
app.use(router);

app.listen(process.env.PORT, () => {
  console.log("Servidor Online", process.env.PORT);
});
