module.exports = {
  name: "botinfo",
  aliases: ["infobot","about","sobre"],
  code: `
$title[1;**$username[$clientID]**]
$description[1;
$addField[1;
**Total de:**;
\`servidores: $serverCount servidores\`
\`canais:  $allChannelsCount\`
]
$addField[1;
**Versões**;
**aoi.js:** \`$packageVersion\`
**node.js:**\`$nodeVersion\`
]
$addField[1;
**Developer**
\`$username[$botOwnerID]($botOwnerID)\`
]
]
$color[1;010101]
