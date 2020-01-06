import InsertResponseType from '../types/InsertResponseType';
import { SongInputType } from '../types/SongInputType';

let gql = `
  mutation insertSong( $input: SongInputType) {
    insertSong( input: $input ) {
      success
      message
    }
  }
`;

export default ({ insertSong }) => ({
  insertSong: {
    type: InsertResponseType,
    method: 'post',
    endpoint: '/insert',
    args: {
      input: { type: SongInputType }
    },
    handleParams: req => ({
      query: gql,
      variables: { input: req.body }
    }),
    resolve: (root, params) => insertSong(params, root)
  }
});