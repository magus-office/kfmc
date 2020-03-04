/*CMD
  command: /Withdraw
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Enter your 10 digit Paytm Number.
  keyboard: 
  aliases: /withdraw
CMD*/

var admin_chat = Bot.getProperty("admin_chat");

if(!admin_chat){
  Bot.sendMessage("*⚠ Sorry! Something Error.*");
  return // exit
}

user_link = Libs.commonLib.getLinkFor(user)

msg = "*💾 Withdrawal Requested By:*\n\n👤 Admin id - " + user_link +
     "\n💳 Paytm - " +
      message +
     "\n🆔 Telegram id - " + user.telegramid;


Bot.sendMessageToChatWithId(
  admin_chat, msg
);

/*
Api.forwardMessage({ 
 chat_id: admin_chat,
 message_id: request.message_id
});
*/

Bot.sendMessage("*Request Send ✅*\n\n⌛Please wait till clear it, don't request again & again it can be bann you permanent!");


