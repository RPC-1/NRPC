module.exports = {
    // spotify/game/twitch
    "mode": "twitch", 
    // dnd/online/idle
    "status": "dnd",

    "game": {
        "applicationID": "",

        "name": "", // title
        "details": "", // first row below title
        "state": "", // row below first row

        "largeImageKey": "", // Large Image
        "largeImageText": "", // the text when img surrounded (default is largeimage name in dev portal)

        "smallImageKey": "", // Small Image
        "smallImageText": "",

        // Date.now() Epoch timestamps
        "startTimestamp": "", // time elapsed since this timestamp (increase ++)
        "endTimestamp": "" // time left since this timestamp (decrease --)
    },
    "twitch": {
        "applicationID": "1158240348854829076",
        "url": "https://www.twitch.tv/discord", // twitch channel link

        "details": "TEST", // title
        "state": "TEST TWITCH", // first row below title (playing ...)

        "largeImageKey": "Genshin-Impact-miHoyo-open-world-RPG-version-1.1-ps4-PS5-pc-ios-android-free-to-play-v1.1", // in dev portal, upload img then name it with the name you want to appear with image is surrounded
        "largeImageText": "IMG TEST", // use this to replace text when img surrounded it will also be second row below title, if you dont want the row dont use it and setup text via dev portal (img name)

        "smallImageKey": "",
        "smallImageText": "",

        "startTimestamp": "",
        "endTimestamp": "",

        // Button configuration
        "button1": {
            "label": "Watch Stream",
            "url": "https://www.twitch.tv/discord"
        },
        "button2": {
            "label": "Join Discord",
            "url": "https://discord.gg/SMEZNVMc"
        }
    },
    "spotify": {
        "name": "", // for example listening to {name} instead of listening to spotify
        "details": "", // title
        "state": "", // row below title

        "largeImageKey": "", // https://github.com/mewzax/Discord-RPC-Selfbot/wiki/Spotify-API
        "largeImageText": "", // will also be second row below title

        "smallImageKey": "",
        "smallImageText": "",

        "startTimestamp": "",
        "endTimestamp": "",
    }
}
