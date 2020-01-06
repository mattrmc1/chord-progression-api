import { GraphQLInputObjectType, GraphQLString, GraphQLList } from "graphql";
import { ProgressionInputType } from "./ProgressionType";

export const SongInputType = new GraphQLInputObjectType({
  name: 'SongInputType',
  fields: () => ({
    title: { type: GraphQLString },
    author: { type: GraphQLString },
    keySignature: { type: GraphQLString },
    timeSignature: { type: GraphQLString },
    root: { type: GraphQLString },
    mode: { type: GraphQLString },
    progression: { type: GraphQLList(ProgressionInputType) }
  })
})