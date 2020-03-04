/*CMD
  command: /usage
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 📊 bot usage
CMD*/

if(chat.chat_type!="private"){ return }

let adminDaily = Libs.ResourcesLib.anotherChatRes("admin-daily", "bot");
let adminDailyRemove = Libs.ResourcesLib.anotherChatRes("admin-remove-daily", "bot");

let mpDaily = Libs.ResourcesLib.anotherChatRes("masters-daily", "bot");
let mpDailyRemove = Libs.ResourcesLib.anotherChatRes("master-remove-daily", "bot");

let mp = Libs.ResourcesLib.anotherChatRes("bbmp", "bot");

usersDaily = Libs.ResourcesLib.anotherChatRes("users-daily", "bot");

msg = "*📊 Current daily usage.* " +
  "\n\n\n   *💰 Total* Distributed: " + adminDaily.value()+
  "\n      *🗳 Withdrawal* Done: " + adminDailyRemove.value()+
  
  "\n\n   *🧾 Admin* Usage Report: " + mpDaily.value()+ "/ 🔮" + mp.value() +
  "\n      *❌ Removed:* " + mpDailyRemove.value() +
  
  "\n\n\n*👥 Users* in Total: " + usersDaily.value() + "\n\n*💾 Log* channel: [Linked Channel! 📢](http://t.me/akkjshhsbhjwjbv)";

Bot.sendMessage(msg);

Bot.sendMessage("")


