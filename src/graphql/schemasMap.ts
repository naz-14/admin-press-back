import 'graphql-import-node';
import * as userTypeDefs from './schemas/user.graphql';
import * as authTypeDefs from './schemas/auth.graphql';
import * as emptyTypeDefs from './schemas/empty.graphql';
import { makeExecutableSchema } from 'graphql-tools';
import resolversMap from './resolversMap';
import { GraphQLSchema } from 'graphql';

const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs: [emptyTypeDefs, authTypeDefs],
  resolvers: resolversMap,
});
export default schema;
