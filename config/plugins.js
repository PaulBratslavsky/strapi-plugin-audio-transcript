module.exports = {
  'ai-utils': {
    enabled: true,
    resolve: './src/plugins/ai-utils',
    config: {
      openAIApiKey: process.env.OPENAI_API_KEY,
    },
  },
}