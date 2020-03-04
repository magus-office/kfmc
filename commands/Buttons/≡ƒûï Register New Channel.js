/*CMD
  command: 🖋 Register New Channel
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Buttons
  answer: Please send *Your Channel* @username or Channel ID (which looks like this -1234567890123)
  keyboard: 
  aliases: 
CMD*/

var admin_chat = Bot.getProperty("admin_chat");

if(!admin_chat){
  Bot.sendMessage("*⚠ Sorry! Something Error.*");
  return // exit
}

user_link = Libs.commonLib.getLinkFor(user)

msg = "*🆕 Channel Summited By:*\n\n👤 Admin id - " + user_link +
     "\n📢 Channel id - " +
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

Bot.sendMessage("✅ Register Successful! ✅ \n\nPlease add as admin our post bot @cloudadspost_bot on your channel with permission! \n\n1) Post Massages \n2) Edit Massages Of Others \n3) Delete Massages Of Others \n\nℹ️ Please Join Official Channel: @CloudAds Also Join Group: https://t.me/joinchat/OAgIixlWRhLiyXVDRNNjDw");


