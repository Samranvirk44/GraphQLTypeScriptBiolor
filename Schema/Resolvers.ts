const { users } = require("../FakeData")

const libs = require("../libs")


const resolver = {
    Query: {
        //User Resolver
        getAllUsers: async () => {
            let data = await libs.User.getAllClientsDb()
            return users
        },
        getAllClients: async () => {
            let data = await libs.User.getAllClients()
            console.log(data)
            return data.clients
        }

    },

    Mutation: {
        createUser(parent: any, args: any) {
            const newUser = args;
            users.push(newUser)
            return users;
        },
        createClient: async (parent: any, args: any) => {
            await libs.User.createUser(args)
            let data = await libs.User.getAllClientsDb()
            console.log("---data---", data)
            return data;
        }
    },

};

module.exports = resolver 