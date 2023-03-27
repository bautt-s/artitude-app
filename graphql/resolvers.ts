// context type for parameters
import { Context } from './context'
import axios from 'axios'

// interface to define argument objects passed to resolvers
interface argsGetUnique { id: string }
interface argsGetByName { name: string }

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