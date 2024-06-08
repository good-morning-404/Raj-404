const axios = require('axios');

module.exports = {
	config: {
		name: "download",
		version: "1.0",
		author: "MR.AYAN", //** original anthor fb I'd : https://m.me/MR.AYAN.2X **//
		countDown: 0,
		role: 0,
		shortDescription: "Downdload Instagram video",
		longDescription: "download Instagram video's,story,reels, photo etc.",
		category: "media",
		guide: "{pn} link"
	},

	onStart: async function ({ message, args }) {
		const name = args.join(" ");
		if (!name)
			return message.reply(`🔴 |  𝙿𝙻𝙰𝙰𝚂𝙴 𝙴𝙽𝚃𝙴𝚁 𝙰 𝚄𝙻𝙻-!!`);
		else {
			const BASE_URL = `https://www.nguyenmanh.name.vn/api/igDL?url=${encodeURIComponent(name)}=&apikey=SyryTUZn`;

			 await message.reply("🕐 |  𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝚅𝙸𝙳𝙴𝙾 𝙿𝙻𝙴𝙰𝚂𝙴 𝚆𝙷𝙰𝙸𝚃...");


			try {
				let res = await axios.get(BASE_URL)


				 let title = res.data.result.title

				let img =  res.data.result.video[0].url;

				const form = {
					body: `𝙼𝙾𝙷𝙰𝙼𝙼𝙰𝙳 𝚁𝙰𝙹\n✅𝙳𝙾𝚆𝙽𝙻𝙾𝙳 𝚅𝙸𝙳𝙴𝙾 𝚂𝙾𝙲𝙲𝙴𝚂𝙵𝚄𝙻𝙻\n\n♕︎𝚃𝙸𝚃𝙻𝙴 : ${title}`
				};
			if (img)
					form.attachment = await global.utils.getStreamFromURL(img);
				message.reply(form);  
			} catch (e) { message.reply(`𝚂𝙾𝚁𝚁𝚈 𝚄𝚁𝙻 𝙸𝚂 𝙽𝙾𝚃 𝚂𝚄𝙿𝙿𝚁𝚃𝙴𝙳-!!🥺`)
									console.log(e);
									}

		}
	}
}; 
