const Discord = require("discord.js");

const counter = new Discord.Client();

counter.on("ready", async () => {
  console.log(`${counter.user.username} est en ligne !`);
  counter.user.setActivity("🐝 Rasphonney");
});

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

counter.on("message", async message => {
  const prefix = "/";
  let messageArray = message.content.split(" ");
  let userTxt = messageArray[0];

  if(userTxt === `${prefix}start`) {
    msg = new Discord.RichEmbed()
    .setDescription("**WORLD PREMIERE**");
    message.channel.send(msg);
    i=10;
    while (i != 0) {
      msg = new Discord.RichEmbed()
      .setTitle("World Premiere")
      .setDescription(i);
      message.channel.send(msg);
      console.log(i);
      i--;
      await sleep (2000);
    }
  }
})

counter.login("NTc2NDk0OTA5NzYzMjIzNTUy.Xe-sWg.1qx3Ge4awQCAP1o4QQoGgBWyC3A");
