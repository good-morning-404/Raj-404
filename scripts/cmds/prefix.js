module.exports = {
 config: {
   name: "prefix",
   version: "1.0",
   author: "MR.AYAN",
   countDown: 5,
   role: 0,
   shortDescription: "no prefix",
   longDescription: "no prefix",
   category: "auto 🪐",
 },

 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "prefix") {
 return message.reply({
 body: `Hello bro\n\nMy prefix is [ ! ]\n\n______________________________\n\n𝗛𝗢𝗪 𝗧𝗢 𝗨𝗦𝗘?\nexample please type: .help - to view sure cmds\n.menu\n.info\n.owner\n.ping\n\n𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥: 𝐌𝐎𝐇𝐀𝐌𝐌𝐀𝐃 𝐑𝐀𝐉 ツ\n______________________________
`,
  attachment: await global.utils.getStreamFromURL("https://i.postimg.cc/Qxc3t9rz/download.gif")
 });
 }
 }
} 
