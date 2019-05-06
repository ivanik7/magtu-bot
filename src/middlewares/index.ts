import logger from "./logger";
import typing from "./typing";
import payload from "./payload";
import send from "./send";
import args from "./args";
import chat from "./chat";
import session from "./session";
import stage from "./stage";
import cancel from "./cancel";

export default (bot: any) => {
  bot.use(chat);
  bot.use(typing);
  bot.use(logger);
  bot.use(payload);
  bot.use(send);
  bot.use(args);
  bot.use(cancel);
  bot.use(session);
  bot.use(stage);
};
