"use strict";
const path = require("path");
const os = require("os");

module.exports = ({ strapi }) => ({
  async getTranscript(ctx) {
    console.log("getTranscript");
    const videoId = ctx.params.videoId;

    const tempFileDir = path.join(os.tmpdir(), videoId);


    try {
      const audioFilePath = await strapi
        .plugin("ai-utils")
        .service("utils")
        .downloadAudioFile(videoId, tempFileDir);

      console.log(audioFilePath);

      const transcription = await strapi
        .plugin('ai-utils')
        .service('aiUtils')
        .whisper(audioFilePath);

      console.log(transcription);

      return { data: "transcription" };
    } catch (error) {
      ctx.throw(500, error);
    }
  },
});
