/* eslint-disable no-undef */
import jwt from 'jsonwebtoken';
import { clientModels } from '../models/index.js';
import { utilsPassword } from '../utils/index.js';

const secret = process.env.SECRET;

const login = async (email, password) => {
  if(!email || !password) {
    return { code: 400, message: 'fields "email" and "password" are required' }
  }

  const findUser = await clientModels.findEmailClient(email);
    if (!findUser) {
      return { code: 409, message: 'invalid user' }
    }
  
    if(email !== findUser.email) {
      return { code: 400, message: 'invalid "email" or "password"' }
    }

  const verifyPassword = await utilsPassword.isPasswordEqual(password, findUser.password);
    if(!verifyPassword) {
      return { code: 400, message: 'invalid "email" or "password"' }
    }
  
  const payload = { id: findUser.id, role: findUser.role };
  const jwtConfig = { algorithm: 'HS256', expiresIn: '30d' };
  const token = jwt.sign(payload, secret, jwtConfig);

  return token;
  
};

export default { login };
