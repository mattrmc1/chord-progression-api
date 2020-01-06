import { GraphQLList } from 'graphql';
import SongType from '../types/SongType';

let gql = `
  query getSongs {
    getSongs {
      title
      author
      keySignature
      timeSignature
      root
      mode
    }
  }
`;

export default resolvers => ({
  getSongs: {
    type: GraphQLList(SongType),
    endpoint: '/songs',
    handleParams: req => ({
      query: gql,
      variables: {}
    }),
    resolve: root => resolvers.getSongs(root)
  }
});