/*CMD
  command: [admin!]?
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: bjsadmin_z
CMD*/

if(chat.chat_type!="private"){ return }

let name =

Bot.sendKeyboard("📦 Create Post, 🚀 User Broadcast,\n💰 Distribute Cash,📊 Bot Usage,\n🤖 Bot Information,🗃 Commands, \n📈 Statistics,🎲 Start Menu", "Welcome! Administrator " + user.username)
