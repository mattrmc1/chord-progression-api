import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt
} from 'graphql';
import ProgressionType from '../types/ProgressionType';

export default new GraphQLObjectType({
  name: 'SongType',
  fields: () => ({
    id: { type: GraphQLInt },
    title: { type: GraphQLString },
    author: { type: GraphQLString },
    keySignature: { type: GraphQLString },
    timeSignature: { type: GraphQLString },
    root: { type: GraphQLString },
    mode: { type: GraphQLString },
    originalKey: { type: GraphQLString },
    originalMode: { type: GraphQLString },
    progression: {type: new GraphQLList(ProgressionType) }
  })
});