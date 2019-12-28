import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList
} from 'graphql';

export default new GraphQLObjectType({
  name: 'ProgressionType',
  fields: () => ({
    chord: { type: GraphQLString },
    length: { type: GraphQLString },
    melody: { type: new GraphQLList(GraphQLString) }
  })
});