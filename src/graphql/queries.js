import { GraphQLObjectType, graphql } from 'graphql';

import resolvers from '../resolvers';
import { parseAccidentals } from '../util/shared';
import getSongById from '../queries/getSongById';
import getSongs from '../queries/getSongs';

export const query = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    ...getSongById(resolvers),
    ...getSongs(resolvers)
  })
});

export const queryRoutes = (router, schema) => {
  let fields = query.getFields();
  
  Object.keys(fields).forEach(key => {
    let item = fields[key];

    router.get(item.endpoint, async (req, res) => {
      // Needs tests - bet I could break this
      let input = item.handleParams(req);
      input.variables.key = parseAccidentals(input.variables.key);

      return graphql(schema, input.query, { req }, null, input.variables)
        .then(data => res.json({
          ...data.data,
          errors: data.errors
        }));
    })
  });
};