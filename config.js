module.exports = {
    Bot: {
        token: 'token do bot fica aqui',
        prefix: "seu(s) prefixo(s) fica(m) aqui",
        intents: "all",
//ative todas as intents no discord developer portal, caso contrário vai dar erro👍
        database: {
            type: "default",
            path: "./db/",
            tables: ["leaf"],
            promisify: false
        },
        respondOnEdit: {
            commands: true
        },
 }
