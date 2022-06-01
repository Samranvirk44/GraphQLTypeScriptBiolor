const { gql } = require("apollo-server-express");

const typeDef = gql`
type User{
    name:String,
    age:Int!,
    married:Boolean!
}

type Client{
    businessName: String,
      email: String,
      givenName: String,
      id: Int,
      identification: String,
      isActive: Boolean,
      name: String,
      notes: String
}

    #Queries
type Query{
    getAllUsers:[User]
}
type Query{
    getAllClients:[Client]
}


    #Mutations
type Mutation{
    createUser(name:String,age:Int,married:Boolean):[User]
    createClient(    businessName: String,
        email: String,
        givenName: String,
        id: Int,
        identification: String,
        isActive: Boolean,
        name: String,
        notes: String):[Client]

}

`;
module.exports = typeDef
