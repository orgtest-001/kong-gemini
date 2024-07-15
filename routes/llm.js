require("dotenv").config();

const { GoogleGenerativeAI } = require("@google/generative-ai");
const express = require("express");
const { generatePrompt } = require("../prompt/prompt");
const router = express.Router();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const llmDataGetter = async (prompt) => {
  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = await response.text();
  console.log(text);

  return text;
};

router.post("/ai", async function (req, res, next) {
  try {
    const type = req.body.type;
    const desrciption = req.body.desrciption;
    const promptText = req.body.prompt || generatePrompt(type, desrciption);
    const responseText = await llmDataGetter(promptText);
    res.json({ result: responseText });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
