// context type for parameters
import { Context } from './context'

// interface to define argument objects passed to resolvers
interface argsGetUnique { id: string }
interface argsGetByName { name: string }
interface argsGetSorted {
    data: {
        sort: 'name' | 'artist' | 'year',
        order: 'asc' | 'desc'
        artistCountry: string
        search: string
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

        getArtpiecesSorted: async (_parent: undefined, args: argsGetSorted, ctx: Context) => await ctx.prisma.artpiece.findMany({
            orderBy: args.data.sort !== 'artist' ? {
                [args.data.sort]: args.data.order
            } : {
                author: { name: args.data.order } 
            },

            where: {
                author: args.data.artistCountry ? {
                    country: args.data.artistCountry
                } : { name: { contains: '' }},

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
            }
        }),

        getAuthorById: async (_parent: undefined, args: argsGetUnique, ctx: Context) => await ctx.prisma.author.findUnique({
            where: {
                id: args.id
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
    }
}