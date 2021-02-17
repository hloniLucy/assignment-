const axios = require('axios');
const { ApolloServer, gql } = require('apollo-server');


// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  #The code below is the type defs which define the schema , or rather the dataset in the schema
  type market {
    coins_count: Int
    active_markets:Int
    total_mcap:String
    total_volume:String
    btc_d:String
      eth_d:String
      mcap_change:String
      volume_change:String
      avg_change_percent:String
      volume_ath:String
      mcap_ath:String

    
  }
## the code below collects attributes from the query so that it knowns what exactly the dataset from the query is .
  type Query {
    Markets: [market]
  }
  `
  ;
//   #Resolvers define the technique for fetching the types defined in the
// #schema. This resolver retrieves books from the "markets" array above.
// #axios retrives the api
const resolvers = {
  Query: {
    Markets:() =>axios.get('https://api.coinlore.net/api/global/').then(res=>res.data)
  },
};
// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.

const server = new ApolloServer({ typeDefs, resolvers });

// #The listen method launches a web server.

server.listen().then(({ url }) => {
    console.log(` Server ready at ${url}`);
});