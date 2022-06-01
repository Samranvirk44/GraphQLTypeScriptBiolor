import express from 'express';
const app = express();
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require("./Schema/TypeDefs")
const resolvers = require("./Schema/Resolvers");
const type = require("./Schema/Type");

const constant = require('./constants')
const config = require(`./config/config.json`);
const Sequelize = require('sequelize');
//const sync = require('./bin/sync.ts');


let sequelize = new Sequelize(config.development.database, config.development.username, config.development.password, {
    host: 'localhost',
    dialect: config.development.dialect
});

async function startApolloServer(typeDefs: any, resolvers: any) {
    const server = new ApolloServer({
        typeDefs,
        resolvers,
    })
    await server.start();
    server.applyMiddleware({ app })
    let PORT = 8080
    sequelize
        .authenticate()
        .then(() => {
            console.log(constant.strings.db.success);
            app.listen(PORT, () => {
                console.log(`Server is listening on port ${PORT}`);
            })
        })
        .catch((err: any) => {
            console.error(constant.strings.db.err, err);
        });
}


function abc(){
}
console.log("type of----",typeof(abc))
startApolloServer(typeDefs, resolvers);