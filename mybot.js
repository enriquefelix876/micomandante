const Discord = require("discord.js");
const  client = new Discord.Client();

let prefix = "!";

client.on("ready", () => {
   console.log("Estoy listo!");
});
client.on("message", (message) => {
  if (message.content.startsWith(prefix + "pedorro")) {
    message.channel.send("Hpta Pedorro men!", {files: ["https://i.ibb.co/nb7v8QN/pedorro2.png"]});

  }else if(message.content.startsWith(prefix + "king")){
    message.channel.send("El mas homosexual del server", {files: ["https://i.ibb.co/W5Zwvx1/ndice.png"]});
  }

  else if(message.content.startsWith(prefix + "carballo")){
    message.channel.send("La pesadilla de Carlos", {files: ["https://i.ibb.co/ZSMzgsH/ndice.jpg"]});
  }
  

});
client.login("NTM5Mjc5NTA0ODI1MTIyODE5.DzFWZw.8Pp5AAzBEdm-cl_y-0wwtqAUJDE");     