/*CMD
  command: /statistics
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 📈 statistics
CMD*/

var msg = "";

var st = data.statistics;

msg="*💬 Total* chats: " + st.total +
"\n*🗯 private* chats: " + st.user_chats_count +
"\n*🗣 groups* chats: " + st.group_chats_count +
"\n*👥 super* groups chats: " +  st.super_group_chats_count +
"\n\n*✅ active* chats during last *day*: "+ st.active_during_last_day +
"\n*✅ active* chats during last *week*: " + st.active_during_last_week;



Bot.sendMessage(msg);
    

