const YTDL = require("@yohancolla/ytdl");

module.exports = ({ strapi }) => ({
  async downloadAudioFile(videoId, path) {
    console.log("Downloading Audio file...");

    const ytdl = new YTDL({
      outputPath: path, // Output file location (default: the home directory)
      queueParallelism: 2, // Download parallelism (default: 1)
      progressTimeout: 2000, // Interval in ms for the progress reports (default: 1000)
      deleteTimeout: 60, // Interval in seconds for delete the file (default: 0 [no delete])
    });

    const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;

    ytdl.toMp3(videoUrl, "highestaudio");

    return new Promise((resolve, reject) => {
      ytdl.on("finish", () => {
        console.log("Download completed");
        resolve(path);
      });
      ytdl.on("progress", (progress) => console.log(JSON.stringify(progress)));
      ytdl.on("error", reject);
    });
  },
});
