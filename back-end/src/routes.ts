import { Router } from "express";
import { createNewQuery } from "./service/gpt";

const router = Router();

//GET
router.get("/", (req, res) => {
  res.json({ status: 200, response: "Api Live" });
});
//POST

router.get("/gpt/:prompt", async (req, res) => {
  // recupero dados que o client mandou
  const { prompt } = req.params;
  // Mandando para gpt
  const responseGPT = await createNewQuery(prompt);
  // mandando para client
  res.json({ status: 200, response: responseGPT });
});

export default router;
