import fetch from "node-fetch";
import { request, gql, GraphQLClient } from 'graphql-request';
const models = require('../models/index');

module.exports = {
  getAllClientsDb: async () => {
    try {
      let data = await models.User.findAll()
      return data
    } catch (err) {
      return err;
    }
  },
  getAllClients: async () => {
    try {
      const graphQLCliente = new GraphQLClient('https://api.staging.vetspire.com/graphql', {
        headers: {
          authorization: "SFMyNTY.g2gDbQAAAAczMjo0MzYwbgYAmtxkzYABYgABUYA.Au83bpdR8GMPgLfg1gjakHd125wcBEiqhVftAZ_bNuE"
        },
      });
      const query = `
        query { 
          clients {
                    businessName,
                    id,
                    identification,
                    isActive,
                    name,
                    email,
                    givenName,
                    notes,
                    phoneNumbers {id, 
                                  preferred, 
                                  notes,
                                  client{
                                    businessName,
                                    givenName,
                                    notes
                                  },value
                    }
            
                  }
        } `;
      const results = await graphQLCliente.request(query);
   
      return results
    } catch (err) {
      return err;
    }
  },

  createUser: async (req: any) => {
    try {

      let data = await models.User.create(req)
      console.log("data", data)
      return data
    } catch (err) {
      return err;
    }
  }

};
