"use strict";
const OpenAI = require("openai");
const fs = require("fs");

async function initializeModel({ openAIApiKey }) {
  return new OpenAI({
    apiKey: openAIApiKey,
  });
}

module.exports = ({ strapi }) => ({
  async whisper(audioFile) {
    const pluginSettings = await strapi.config.get("plugin.ai-utils");

    console.log("pluginSettings", pluginSettings);

    console.log("audioFile", audioFile);

    // const openai = await initializeModel(pluginSettings.openAIApiKey);


    // const response = await openai.audio.transcriptions.create({
    //   file: audioFile,
    //   model: "whisper-1",
    // });

    // console.log("response", response);

    // fs.unlinkSync(audioFile);



    return { data: "transcription" };
  },
});
