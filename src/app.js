import express from 'express';
import expressGraphQL from 'express-graphql';
import { graphql } from 'graphql';
import schema from './graphql/schema';

const app = express();

app.get('/', (req,res) => res.json('Yaoo'));

app.use('/graphql', expressGraphQL({
  schema: schema,
  graphiql: true
}))

app.post('/gql', (req, res) => {
  graphql(schema, req.body.query, null, null, req.body.variables )
    .then(data => res.json(data))
    .catch(err => res.json(err))
})

export default app;