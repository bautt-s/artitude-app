import  { gql }  from  "apollo-server-micro"; 

export const typeDefs = gql`
    type Artpiece {
        id: ID
        name: String!
        image: String!
        type: String!
        dimensions: String
        description: String
        buyable: Boolean!
        price: Int
        year: Int!
        author: Author
    }

    type Author {
        id: ID
        name: String!
        image: String!
        country: String!
        birthYear: Int!
        deathYear: Int
        description: String!
        pieces: [Artpiece]
    }

    type Query {
        getAllArtpieces: [Artpiece]
        getAllAuthors: [Author]
        getArtpieceById(id: String!): Artpiece!
        getAuthorById(id: String!): Author!
        getArtpiecesByName(name: String): [Artpiece]
        getAuthorsByName(name: String): [Author]
    }`