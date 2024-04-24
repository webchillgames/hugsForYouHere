import { pino } from "pino";
import { encouragingPhrases } from "./phrases.js";
import TelegramBot from "node-telegram-bot-api";

const logger = pino({
  level: "info",
});

const token = "6893257285:AAHxNasTZ_Cjph4CaD_Z8e6YprYBsj0xqnk";
const bot = new TelegramBot(token, { polling: true });

bot.on("start", () => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, "Добро пожаловать :) ");
});

bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  try {
    bot.sendMessage(chatId, setPhrase());
    // bot.sendPhoto(chatId, 'cat.webp');
  } catch (e) {
    logger.info(e);
  }
});

function setPhrase() {
  const idx = Math.floor(Math.random() * encouragingPhrases.length);
  return encouragingPhrases[idx];
}
