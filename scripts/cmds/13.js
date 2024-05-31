module.exports = {
    config: {
        name: "🥲",
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
    if (event.body && event.body.toLowerCase() == "🥲") return message.reply("এ্ঁতো্ঁ কা্ঁন্না্ঁ করো্ঁ কে্ঁনাঁ সো্ঁনা্ঁ!!😒");
}
}; 
