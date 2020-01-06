import { GraphQLObjectType, GraphQLString } from 'graphql';

import InsertResponseType from '../types/InsertResponseType';
import resolvers from '../resolvers';

export const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    insertSong: {
      type: InsertResponseType,
      args: {
        title: { type: GraphQLString },
        author: { type: GraphQLString },
        keySignature: { type: GraphQLString },
        timeSignature: { type: GraphQLString },
        root: { type: GraphQLString },
        mode: { type: GraphQLString },
        progression: { type: GraphQLString }
      },
      resolve: (root, params) => resolvers.insertSong(params, root)
    }
  })
});

// TODO: mutationRoutes