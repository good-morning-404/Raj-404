const axios = require('axios');
const fs = require('fs');
const path = require('path');

module.exports = {
config: {
  name: "Admin",
  aurthor:"MR.AYAN",// Convert By Goatbot MR.AYAN 
   role: 0,
  shortDescription: " ",
  longDescription: "",
  category: "admin",
  guide: "{pn}"
},

  onStart: async function ({ api, event }) {
  try {
    const ownerInfo = {
      name: '𝙼𝙾𝙷𝙰𝙼𝙼𝙰𝙳 𝚁𝙰𝙹',
      gender: '𝙼𝙰𝙻𝙴',
      age: '18+',
      height: '𝙸𝙽𝙱𝙾𝚇',
      facebookLink: 'https://www.facebook.com/profile.php?id=100085082042087',
      nick: '𝙼𝙾𝙷𝙰𝙼𝙼𝙰𝙳 𝚁𝙰𝙹'
    };

    const bold = 'https://i.imgur.com/uVZFG7y.jpeg'; // Replace with your Google Drive videoid link https://drive.google.com/uc?export=download&id=here put your video id

    const tmpFolderPath = path.join(__dirname, 'tmp');

    if (!fs.existsSync(tmpFolderPath)) {
      fs.mkdirSync(tmpFolderPath);
    }

    const videoResponse = await axios.get(bold, { responseType: 'arraybuffer' });
    const videoPath = path.join(tmpFolderPath, 'owner_video.gif');

    fs.writeFileSync(videoPath, Buffer.from(videoResponse.data, 'binary'));

    const response = `
𝙰𝙳𝙼𝙸𝙽 𝙸𝙽𝙵𝙾𝚁𝙼𝙰𝚃𝙸𝙾𝙽:🧾
𝙽𝙰𝙼𝙴: ${ownerInfo.name}
𝙶𝙴𝙽𝙳𝙴𝚁: ${ownerInfo.gender}
𝙰𝙶𝙴: ${ownerInfo.age}
𝙷𝙴𝙸𝙶𝙴: ${ownerInfo.height}
𝙵𝙰𝙲𝙴𝙱𝙾𝙾𝚔: ${ownerInfo.facebookLink}
𝙽𝙸𝙲𝙺: ${ownerInfo.nick}
`;


    await api.sendMessage({
      body: response,
      attachment: fs.createReadStream(videoPath)
    }, event.threadID, event.messageID);

    if (event.body.toLowerCase().includes('ownerinfo')) {
      api.setMessageReaction('✅', event.messageID, (err) => {}, true);
    }
  } catch (error) {
    console.error('Error in ownerinfo command:', error);
    return api.sendMessage('An error occurred while processing the command.', event.threadID);
  }
},
};
