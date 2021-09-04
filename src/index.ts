import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import schema from './graphql/schemasMap';
import sequelize from './db/connection';

(async () => {
  try {
    sequelize.sync({ alter: true });
  } catch (e) {
    console.log(e);
  }

  const PORT = 4000;
  const app = express();
  const server = new ApolloServer({
    schema,
  });
  await server.start();
  server.applyMiddleware({ app, path: '/graphql' });
  app.listen(PORT, () => {
    console.log(`Graphql server runing on port: ${PORT}`);
  });
})();
