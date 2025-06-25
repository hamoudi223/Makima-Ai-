// makima.js
const { zokou } = require("../framework/zokou");
const axios = require("axios");

// OpenAI API key
const OPENAI_API_KEY = "sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";

// Ton numéro maître
const OWNER_NUMBER = "22395064497";

// Liste de stickers Makima (liens directs)
const makimaStickers = [
  "https://i.imgur.com/jdQm8xA.png",
  "https://i.imgur.com/hjfaYOD.png",
  "https://i.imgur.com/ptZ8MXz.png",
  "https://i.imgur.com/7QKCrYx.png"
];

zokou({
  nomCom: "makima",
  categorie: "IA",
  plugin: "makima-ai",
  reaction: "🧠",
  desc: "Parle avec Makima, IA française qui répond avec classe et envoie un sticker à chaque fois.",
  alias: ["mak", "makichat"]
}, async (dest, zk, ops) => {
  const { repondre, msg, arg, numero } = ops;

  if (!arg || arg.length === 0) {
    return repondre("Pose-moi une question, s’il te plaît. 🐾");
  }

  // Prompt OpenAI
  const prompt = `Tu es Makima de Chainsaw Man, une femme calme, élégante, polie et mystérieuse. Tu réponds toujours en **français**, avec respect et un ton légèrement supérieur mais doux. Si ton interlocuteur est le numéro ${OWNER_NUMBER}, sois flatteuse et protectrice. Voici la question : ${arg.join(" ")}`;

  try {
    const res = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.7,
        max_tokens: 250
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${OPENAI_API_KEY}`
        }
      }
    );

    const responseText = res.data.choices[0].message.content;

    // Envoie de la réponse
    await repondre(`🎀 Makima : ${responseText}`);

    // Envoie du sticker après la réponse, à chaque fois
    const stickerUrl = makimaStickers[Math.floor(Math.random() * makimaStickers.length)];
    await zk.sendMessage(dest, { image: { url: stickerUrl }, caption: "✨" });

  } catch (err) {
    console.error("Erreur API OpenAI :", err);
    repondre("Désolée, quelque chose m'empêche de répondre pour le moment... 🥀");
  }
});
