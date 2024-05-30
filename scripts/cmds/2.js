module.exports = {
    config: {
        name: "raj",
        version: "1.0",
        author: "MR.AYAN", //** original author fb I'd : https://m.me/MR.AYAN.2X **//
        countDown: 5,
        role: 0,
        shortDescription: "No Prefix",
        longDescription: "No Prefix",
        category: "reply",
    },
onStart: async function(){}, 
onChat: async function({
    event,
    message,
    getLang
}) {
    if (event.body && event.body.toLowerCase() == "hmm") return message.reply("এতো আমার বস কে ডাকো কেন হে-!!😒");
}
}; 
