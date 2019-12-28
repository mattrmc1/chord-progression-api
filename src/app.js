import express from 'express';
import expressGraphQL from 'express-graphql';
import schema from './graphql/schema';

const app = express();

app.get('/', (req,res) => res.json('Yaoo'));

app.use('/graphql', expressGraphQL({
  schema: schema,
  graphiql: true
}))

export default app;