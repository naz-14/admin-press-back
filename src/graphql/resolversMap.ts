import { Resolvers } from './generated';
import { merge } from 'lodash';
import UserResolver from './resolvers/UserResolver';
import AuthResolver from './resolvers/AuthResolver';

const resolversMap: Resolvers = merge([UserResolver, AuthResolver]);

export default resolversMap;
