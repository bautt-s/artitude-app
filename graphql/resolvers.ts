import prisma from '../lib/prisma'
import { Context } from './context'

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

        getArtpiece: () => {},
        getAuthor: () => {},
    }
}