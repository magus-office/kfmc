/*CMD
  command: /balance
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 

  <<KEYBOARD

  KEYBOARD
  aliases: 📚 my earnings
CMD*/

if(chat.chat_type!="private"){ return }

var india_time = new Date().toLocaleString("en-US", {timeZone: "Asia/Kolkata"}); 

let res = Libs.ResourcesLib.userRes("BBPoint");
Bot.sendMessage("*🗓 Current Indian Time:*\n    🕒 " +india_time + "\n\n*💰 Current Earnings:* " +res.value() + " ₹\n\n✅ Must Join: [❗️Join Here](https://t.me/joinchat/OAgIixlWRhLiyXVDRNNjDw)\n📜 Minimum Redeem: 1 ₹\n🗂 Withdraw Request: /Withdraw");


