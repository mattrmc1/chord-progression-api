import { GraphQLList } from 'graphql';
import SongType from '../types/SongType';

let gql = `
  query songs {
    songs {
      id
      title
      author
      keySignature
      timeSignature
      root
      mode
    }
  }
`;

export default ({ getSongs }) => ({
  songs: {
    type: GraphQLList(SongType),
    method: 'get',
    endpoint: '/songs',
    handleParams: req => ({
      query: gql,
      variables: {}
    }),
    resolve: root => getSongs(root)
  }
});