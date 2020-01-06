import {
  GraphQLInputObjectType,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList
} from 'graphql';

export const ProgressionType = new GraphQLObjectType({
  name: 'ProgressionType',
  fields: () => ({
    chord: { type: GraphQLString },
    length: { type: GraphQLString },
    melody: { type: new GraphQLList(GraphQLString) }
  })
});

export const ProgressionInputType =  new GraphQLInputObjectType({
  name: 'ProgressionInputType',
  fields: () => ({
    chord: { type: GraphQLString },
    length: { type: GraphQLString }
  })
});

export default ProgressionType;