import { Router } from 'express';
import schema from './graphql/schema';
import { queryRoutes } from './graphql/queries';

const router = Router();

router.get('/', (req, res) => res.json({ message: "Yaoo"}));

queryRoutes(router, schema);
// TODO: mutationRoutes

export default router;
