/*CMD
  command: 🚀 User Broadcast
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
*⌨ Enter New Message.*

You can also Forward text from another chat or channel.


  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

Bot.sendMessageToAllPrivateChats("*👔 User Broadcast*\n\n- "+message)

Bot.sendMessage("*⌛️ Massage sending.* \n\nIntermediate report will be formed after send massages.")
