/*CMD
  command: Time
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: ⏰ clock
CMD*/

var india_time = new Date().toLocaleString("en-US", {timeZone: "Asia/Kolkata"}); 

Bot.sendMessage("*India Time: *"+india_time)
