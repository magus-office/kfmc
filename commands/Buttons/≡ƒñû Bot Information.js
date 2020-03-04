/*CMD
  command: 🤖 Bot Information
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Buttons
  answer: 
  keyboard: 
  aliases: 
CMD*/

var buttons = [
    [ { title: "🧩 Bot Creator", url: "https://t.me/phpStark"} ],
    [ { title: "ℹ Payment Help", command: "/paymenthelp"} ],
    ]

Bot.sendInlineKeyboard(buttons, "AD Manager Bot 🤖 Version 0.0.1 (beta)\n\nBot Owner: Admin User 👨‍💻\n\nAdmin Tgid: -940050571\nContact Button: @CloudAds_Admin");
