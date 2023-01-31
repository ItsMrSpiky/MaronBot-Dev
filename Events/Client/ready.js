const { loadCommands } = require("../../Handlers/commandHandler");
module.exports = {
  name: "ready",
  once: true,
  execute(client) {
    console.log("The client is on.");
    //client.user.setActivity(`kofi`); // for people in the server ${client.guilds.cache.size}

    loadCommands(client);
  },
};
