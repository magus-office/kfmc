/*CMD
  command: 📦 Create Post
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Buttons
  answer: 
  keyboard: 
  aliases: 
CMD*/

var buttons = [
    [ { title: "📝 Create Post Here!", url: "https://t.me/cloudadspost_bot?start"} ],
    [ { title: "Cancel", command: "/start"} ],
    ]

Bot.sendInlineKeyboard(buttons, "Use *Cloud Ads* Post Bot!");
