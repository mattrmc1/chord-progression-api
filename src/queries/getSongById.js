import { GraphQLInt, GraphQLString } from 'graphql';
import SongType from '../types/SongType';

let gql = `
  query songById( $id: Int!, $key: String, $mode: String ) {
    songById( id: $id, key: $key, mode: $mode ){
      title
      root
      progression {
        chord
        length
      }
    }
  }
`;

export default ({ getSongById }) => ({
  songById: {
    type: SongType,
    method: 'get',
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
    resolve: (root, params) => getSongById(params, root)
  }
});