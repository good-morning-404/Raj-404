const fs = require('fs');
const moment = require('moment-timezone');

module.exports = {
  config: {
    name: "info",
    aliases: ["inf", "in4"],
    version: "2.0",
    author: "MR.AYAN",
    countDown: 5,
    role: 0,
    shortDescription: {
      vi: "",
      en: "Sends information about the bot and admin along with an image."
    },
    longDescription: {
      vi: "https://i.imgur.com/uVZFG7y.jpeg",
      en: "Sends information about the bot and admin along with an image."
    },
    category: "Information",
    guide: {
      en: "{pn}"
    },
    envConfig: {}
  },

  onStart: async function ({ message }) {
    this.sendInfo(message);
  },

  onChat: async function ({ event, message }) {
    if (event.body && event.body.toLowerCase() === "info") {
      this.sendInfo(message);
    }
  },

  sendInfo: async function (message) {
    const botName = "𝚂𝚃𝚄𝙳𝙴𝙽𝚃 𝚁𝙾𝙱𝙾𝚃";
    const botPrefix = "!";
    const authorName = "𝙼𝙾𝙷𝙰𝙼𝙼𝙰𝙳 𝚁𝙰𝙹";
    const authorFB = "https://www.facebook.com/profile.php?id=100085082042087";
    const authorInsta = "𝙸𝙽𝙱𝙾𝚇";
    const status = "𝙰𝙼𝙸 𝚅𝙰𝙻𝙾 𝙼𝙰𝙽𝚄𝚂 𝙿𝚁𝙴𝙼 𝙺𝙾𝚁𝙸 𝙽𝙰";

    const urls = JSON.parse(fs.readFileSync('scripts/cmds/assets/info.json'));
    const link = urls[Math.floor(Math.random() * urls.length)];

    const now = moment().tz('Asia/Dhaka');
    const date = now.format('MMMM Do YYYY');
    const time = now.format('h:mm:ss A');

    const uptime = process.uptime();
    const seconds = Math.floor(uptime % 60);
    const minutes = Math.floor((uptime / 60) % 60);
    const hours = Math.floor((uptime / (60 * 60)) % 24);
    const days = Math.floor(uptime / (60 * 60 * 24));
    const uptimeString = `${hours}h ${minutes}m ${seconds}sec`;

    message.reply({
      body: `
≡≡║𝚁𝙰𝙹 𝚁𝙾𝙱𝙾𝚃 𝙸𝙽𝙵𝙾║≡≡
﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

➠𝙱𝙾𝚃 𝙽𝙰𝙼𝙴↠ ${botName}

➠𝙱𝙾𝚃 𝙿𝚁𝙴𝙵𝙸𝚇↠ ${botPrefix}

➠𝙾𝚆𝙽𝙴𝚁 𝙽𝙰𝙼𝙴↠ ${authorName}

➠𝙵𝙰𝙲𝙴𝙱𝙾𝙾𝙺↠ ${authorFB}

➠𝙸𝙽𝚂𝚃𝙰𝙶𝚁𝙰𝙼↠ ${authorInsta}

➠𝚂𝚃𝙰𝚃𝚄𝚂↠ ${status}

➠𝙳𝙰𝚃𝙴↠ ${date}

➠𝚃𝙸𝙼𝙴↠ ${time}

➠𝚄𝙿𝚃𝙸𝙼𝙴↠ ${uptimeString}

﹋﹋﹋﹋﹋﹋﹋﹋﹋﹋﹋﹋﹋﹋
𝚃𝙰𝙽𝙶𝚂 𝙵𝙾𝚁 𝚄𝚂𝙸𝙽𝙶 ↠ \➪${botName}
﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏`,
      attachment: await global.utils.getStreamFromURL(link)
    });
  }
};
