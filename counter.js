const Discord = require("discord.js");

const counter = new Discord.Client();

async function init(){
   await sleep(1000)
}
function sleep(ms){
    return new Promise(resolve=>{
        setTimeout(resolve,ms)
    })
}

counter.on("ready", async () => {
  console.log(`${counter.user.username} est en ligne !`);
});

counter.on("message", async message => {
  const prefix = "/";
  let messageArray = message.content.split(" ");
  let userTxt = messageArray[0];

  if(userTxt === `${prefix}start`) {
    msg = new Discord.RichEmbed()
    .setDescription("WORLD PREMIERE");
    message.channel.send(msg);
    i=10;
    while (i != 0) {
      msg = new Discord.RichEmbed()
      .setTitle("World Premiere")
      .setDescription(i);
      message.channel.send(msg);
      i--;
      sleep(1000);
    }
  }
})



counter.login("");
