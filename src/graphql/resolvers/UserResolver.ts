import { Resolvers } from '../generated';
import User from '../../models/UserModel';

const UserResolver: Resolvers = {
  // Query: {
  //   Users: async (_, input, context) => {
  //     return await User.findAll();
  //   },
  // },
  // Mutation: {
  //   createUser: async (_, { input }) => {
  //     const { name, money } = input;
  //     return await User.create({
  //       name,
  //       money,
  //     });
  //   },
  // },
};

export default UserResolver;
