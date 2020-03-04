/*CMD
  command: ℹ Help
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Buttons
  answer: 
  keyboard: 
  aliases: 
CMD*/

let name = "*Hi there " + user.username + "  👋*"

let msg =
  "" +
  name +
  "\n-Want to advertise?\nClick on Advertise in menu and talk to our admin.\n\n-How to start Earning?\nIts simple just register your channel in menu and Done!\n\n-How does this work?\nWe broadcast ads request by users and share 85% earnings with you!\n\n-Anyway to contact you?\nYes go to Contact for advertise in menu,you will get the link to contact admin!\n\nBot Created by @phpStark\nUse the *buttons* for further navigation 💬"

Bot.sendMessage(msg)
