// context type for parameters
import { Context } from './context'

// interface to define argument objects passed to resolvers
interface argsGetUnique { id: string }
interface argsGetByName { name: string }

interface argsArtpiecesSorted {
    data: {
        sort: 'name' | 'artist' | 'year',
        order: 'asc' | 'desc'
        artistCountry: string
        search: string
    }
}

interface argsAuthorsSorted {
    data: {
        sort: 'name' | 'year',
        order: 'asc' | 'desc',
        artistCountry: string,
        search: string
    }
}

interface argsCreateAuthor {
    data: {
        birthYear: number,
        deathYear: number,
        country: string,
        description: string,
        image: string,
        name: string
    }
}

interface argsCreateArtpiece {
    data: {
        authorId: string,
        buyable: boolean,
        description: string,
        image: string,
        name: string,
        price: number,
        type: string,
        year: number,
        dimensions: string
    }
}

export const resolvers = {
    Query: {
        getAllArtpieces: async (_parent: undefined, _args: undefined, ctx: Context) => await ctx.prisma.artpiece.findMany({
            include: {
                author: true
            }
        }),

        getAllAuthors: async (_parent: undefined, _args: undefined, ctx: Context) => await ctx.prisma.author.findMany({
            include: {
                pieces: true
            }
        }),

        getArtpiecesSorted: async (_parent: undefined, args: argsArtpiecesSorted, ctx: Context) => await ctx.prisma.artpiece.findMany({
            orderBy: args.data.sort !== 'artist' ? {
                [args.data.sort]: args.data.order
            } : {
                author: { name: args.data.order }
            },

            where: {
                author: args.data.artistCountry ? {
                    country: args.data.artistCountry
                } : { name: { contains: '' } },

                name: {
                    contains: args.data.search ? args.data.search : '',
                    mode: 'insensitive'
                }
            },

            include: {
                author: true
            }
        }),

        getArtpieceById: async (_parent: undefined, args: argsGetUnique, ctx: Context) => await ctx.prisma.artpiece.findUnique({
            where: {
                id: args.id
            },

            include: {
                author: true
            }
        }),

        getArtpiecesByName: async (_parent: undefined, args: argsGetByName, ctx: Context) => await ctx.prisma.artpiece.findMany({
            where: {
                name: {
                    contains: args.name
                }
            },

            include: {
                author: true
            }
        }),

        getAuthorsByName: async (_parent: undefined, args: argsGetByName, ctx: Context) => await ctx.prisma.author.findMany({
            where: {
                name: {
                    contains: args.name
                }
            },

            include: {
                pieces: true
            }
        }),

        getAuthorById: async (_parent: undefined, args: argsGetUnique, ctx: Context) => await ctx.prisma.author.findUnique({
            where: {
                id: args.id
            },

            include: {
                pieces: true
            }
        }),

        getAuthorsSorted: async (_parent: undefined, args: argsAuthorsSorted, ctx: Context) => await ctx.prisma.author.findMany({
            orderBy: {
                [args.data.sort]: args.data.order
            },

            where: {
                country: args.data.artistCountry ? args.data.artistCountry : { contains: '' },

                name: {
                    contains: args.data.search ? args.data.search : '',
                    mode: 'insensitive'
                }
            }
        })
    },

    Mutation: {
        createAuthor: async (_parent: undefined, args: argsCreateAuthor, ctx: Context) => await ctx.prisma.author.create({
            data: {
                name: args.data.name,
                image: args.data.image,
                country: args.data.country,
                description: args.data.description,
                birthYear: args.data.birthYear,
                deathYear: args.data.deathYear
            }
        }),

        createArtpiece: async (_parent: undefined, args: argsCreateArtpiece, ctx: Context) => await ctx.prisma.artpiece.create({
            data: {
                authorId: args.data.authorId,
                name: args.data.name,
                buyable: args.data.buyable,
                description: args.data.description,
                image: args.data.image,
                price: args.data.price,
                type: args.data.type,
                year: args.data.year,
                dimensions: args.data.dimensions
            },
        })
    }
}