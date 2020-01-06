import { GraphQLInt, GraphQLString } from 'graphql';
import SongType from '../types/SongType';

let gql = `
  query getSongById( $id: Int!, $key: String, $mode: String ) {
    getSongById( id: $id, key: $key, mode: $mode ){
      title
      root
      progression {
        chord
        length
      }
    }
  }
`;

export default resolvers => ({
  getSongById: {
    type: SongType,
    endpoint: '/songs/:id/:key?/:mode?',
    args: {
      id: { type: GraphQLInt },
      key: { type: GraphQLString },
      mode: { type: GraphQLString }
    },
    handleParams: req => ({
      query: gql,
      variables: {
        id: parseInt(req.params.id),
        key: req.params.key,
        mode: req.params.mode
      }
    }),
    resolve: (root, params) => resolvers.getSongById(params, root)
  }
});