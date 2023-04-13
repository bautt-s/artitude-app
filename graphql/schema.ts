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
        id: ID!
        authorId: ID!
        name: String!
        image: String!
        country: String!
        birthYear: Int!
        deathYear: Int
        description: String!
        pieces: [Artpiece]
    }

    input DataSort {
        sort: String!
        order: String!
        artistCountry: String!
        search: String!
    }

    type Query {
        getAllArtpieces: [Artpiece]
        getAllAuthors: [Author]
        getArtpieceById(id: String): Artpiece
        getAuthorById(id: String): Author
        getArtpiecesByName(name: String): [Artpiece]
        getAuthorsByName(name: String): [Author]
        getArtpiecesSorted(data: DataSort): [Artpiece]
        getAuthorsSorted(data: DataSort): [Author]
    }

    input DataAuthor {
        birthYear: Int!
        country: String!
        deathYear: Int
        description: String!
        image: String
        name: String!
    }

    input DataArtpiece {
        authorId: String!
        buyable: Boolean!
        description: String
        image: String!
        name: String!
        price: Int
        type: String
        year: Int!
        dimensions: String
    }
    
    type Mutation {
        createAuthor(data: DataAuthor): Author,
        createArtpiece(data: DataArtpiece): Artpiece
    }`