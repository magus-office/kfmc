/*CMD
  command: 💰 Distribute Cash
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Buttons

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
CMD*/

var buttons = [
    [ { title: "💳 Update Here!", url: "https://t.me/joinchat/OAgIixlWRhLiyXVDRNNjDw"} ],
    [ { title: "Cancel", command: "/start"} ],
    ]

Bot.sendInlineKeyboard(buttons, "*💰 Distribute Balance 💰*\n\nAdmin can:\n- Update Balance: 1, 2\n- Can Deduct : ❌ -1, -2, -3\n\nBot Admins have: 1\n\nReset progress: NaN%\n\nℹ️ *More Info:* @phpStark");
