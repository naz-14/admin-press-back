import 'graphql-import-node';
import * as userTypeDefs from './schemas/user.graphql';
import * as emptyTypeDefs from './schemas/empty.graphql';
import { makeExecutableSchema } from 'graphql-tools';
import resolversMap from './resolversMap';
import { GraphQLSchema } from 'graphql';

const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs: [emptyTypeDefs, userTypeDefs],
  resolvers: resolversMap,
});
export default schema;
