const rpc = require('discordrpcgenerator'),
    client = require('..'),
    config = require('.././config'),
    console = require('.././utils/logger'),
    discord = require('../utils/discord');

client.on("ready", async () => {
    console.logger.info(`Logged in as ${client.user.tag}!`);
    
    // Check if application ID and Twitch URL are provided
    if (!config.twitch.applicationID) return console.exit("No application ID specified");
    if (!config.twitch.url) console.logger.warn("No twitch channel specified");

    // Create a new RPC presence instance
    let presence = new rpc.Rpc()
        .setType("STREAMING")
        .setApplicationId(config.twitch.applicationID)
        .setName("rpc");

    // Set Twitch URL
    if (config.twitch.url) presence.setUrl(config.twitch.url);

    // Retrieve images if available
    let largeImage = config.twitch.largeImageKey ? await discord.getImage(config.twitch.applicationID, config.twitch.largeImageKey) : null;
    let smallImage = config.twitch.smallImageKey ? await discord.getImage(config.twitch.applicationID, config.twitch.smallImageKey) : null;

    // Set presence details and state
    if (config.twitch.state) presence.setState(config.twitch.state);
    if (config.twitch.details) presence.setDetails(config.twitch.details);

    // Set large image
    if (largeImage && largeImage.id) presence.setAssetsLargeImage(largeImage.id);
    if (config.twitch.largeImageText) {
        presence.setAssetsLargeText(config.twitch.largeImageText);
    } else if (largeImage && largeImage.name) {
        presence.setAssetsLargeText(largeImage.name);
    }

    // Set small image
    if (smallImage && smallImage.id) presence.setAssetsSmallImage(smallImage.id);
    if (config.twitch.smallImageText) {
        presence.setAssetsSmallText(config.twitch.smallImageText);
    } else if (smallImage && smallImage.name) {
        presence.setAssetsSmallText(smallImage.name);
    }

    // Set timestamps
    if (config.twitch.startTimestamp) presence.setStartTimestamp(config.twitch.startTimestamp);
    if (config.twitch.endTimestamp) presence.setEndTimestamp(config.twitch.endTimestamp);

    // Add optional buttons
    if (config.twitch.button1) {
        presence.addButton(config.twitch.button1.label, config.twitch.button1.url);
    }
    if (config.twitch.button2) {
        presence.addButton(config.twitch.button2.label, config.twitch.button2.url);
    }

    // Set the presence for the user
    client.user.setPresence(presence.toDiscord());
    
    // Set the user's status
    if (config.status === 'online' || config.status === 'idle' || config.status === 'dnd') {
        client.user.setStatus(config.status);
    }

    // Log the results
    console.logger.info('Twitch RPC enabled!');
    console.logger.info('Twitch: ' + config.twitch.state);
    console.logger.info(`Status: ${!config.status ? 'default' : config.status}`);
});
