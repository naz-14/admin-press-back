import { Resolvers } from '../generated';
import User from '../../models/UserModel';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
require('dotenv').config();

const AuthResolver: Resolvers = {
  Mutation: {
    registerUser: async (_, { input }) => {
      let { email, password, userName } = input;
      const salt = await bcrypt.genSalt(10);
      password = await bcrypt.hash(password, salt);
      try {
        await User.create({
          email,
          password,
          userName,
        });
        return true;
      } catch (e) {
        throw new Error('The user cant be created');
      }
    },
    authUser: async (_, { input }) => {
      const { password, userName } = input;
      throw new Error('User');
      return {
        token: '',
      };
    },
  },
};

export default AuthResolver;
