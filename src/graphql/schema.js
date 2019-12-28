import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString
} from 'graphql';

import SongType from '../types/SongType';
import resolvers from '../resolvers';

const RootQuery = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    song: {
      type: SongType,
      args: {
        id: { type: GraphQLInt },
        key: { type: GraphQLString },
        mode: { type: GraphQLString }
      },
      resolve: (root, params) => resolvers.getSongById(params, root)
    }
  })
})

export default new GraphQLSchema({
  query: RootQuery,
  mutation: null
})