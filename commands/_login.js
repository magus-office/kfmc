/*CMD
  command: /login
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *⚠ Enter Security Password!*
  keyboard: 
  aliases: 
CMD*/

msg = "*❎ Wrong Password!* \n\n🕒 Retry again - /login"

if(message=="CloudAds_BetaTester"){
  Bot.setProperty("admin_chat", chat.chatid, "string")
  msg = "";
var buttons = [
    [ { title: "Login as Admin!", command: "[admin!]?"} ],
    ]

Bot.sendInlineKeyboard(buttons, "*✅ Right Password!* \n\nℹ Please click on login as admin!");

}

Bot.sendMessage(msg);

