import { Resolvers } from './generated';
import { merge } from 'lodash';
import UserResolver from './resolvers/UserResolver';

const resolversMap: Resolvers = merge(UserResolver);

export default resolversMap;
