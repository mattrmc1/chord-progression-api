import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString
} from 'graphql';

import SongType from '../types/SongType';
import InsertResponseType from '../types/InsertResponseType';
import resolvers from '../resolvers';

const query = new GraphQLObjectType({
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
});

const mutation = new GraphQLObjectType({
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

export default new GraphQLSchema({ query, mutation })