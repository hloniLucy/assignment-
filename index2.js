const user = require("./coin.js");
const { ApolloServer, gql } = require('apollo-server');


const typeDefs = gql`
  
  type Ticker {
    id:String 
      symbol:String
      name: String
      nameid:String
      rank:Int
      price_usd: String
      percent_change_24h:String
      percent_change_1h:String
      percent_change_7d:String
      price_btc:String
      market_cap_usd:String
      volume24:String
      volume24a: String
      csupply:String
      tsupply:String
      msupply: String

     
  }

 #the code bwlow defines each data set using its disinct attibute.for instance the ID.
  type Query {
    getUser(id: String): Ticker
    getUsers(id: String): [Ticker]
  }
  `
  ;

const resolvers = {
  Query: {
    getUser: async(_,{id}, {dataSources}) => 
    dataSources.user.getUser(id),
    getUsers: async(_, {id}, {dataSources} )=>
        dataSources.user.getUsers(id)
  }
};



const server = new ApolloServer({ 
    typeDefs, 
    resolvers,
    dataSources: () => ({
        user: new user()
    })
});

// #The listen method launches a web server.

server.listen().then(({ url }) => {
    console.log(` Server ready at ${url}`);
});