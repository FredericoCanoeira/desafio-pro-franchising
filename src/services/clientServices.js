import { clientModels } from '../models/index.js'
import { utilsPassword } from '../utils/index.js'

const createClient = async (name, email, password) => {

  const checkFields = name && email && password;
    if (!checkFields) {
      return { code: 400, message: 'the fields "name", "email", "password" are required.'};
    }

  const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email);
    if (!emailRegex) {
      return { code: 400, message: '"email" must be a valid email' };
    }

  const findUser = await clientModels.findEmailClient(email);
    if (findUser) {
      return { code: 409, message: 'User already registered' }
    }

  const encryptPassword = await utilsPassword.createHashPassword(password);
  const registerUser = await clientModels.createClient(name, email, encryptPassword);
  return registerUser;
};

const getClients = async () => {
  const clients = await clientModels.getClients();
  return clients;
};

const getClient = async (id) => {
  const clients = await clientModels.getClient(id);
    if(!clients) {
      return { code: 404, message: 'Client does not exist' }
    }
  return clients;
};

const updateClients = async (id, name, email, password) => {
  const verifyId = await clientModels.getClient(id);
    if(!verifyId) {
      return { code: 404, message: 'Client does not exist' }
    }

  const updated = await clientModels.updateClients(id, name, email, password);
  return updated;
};

const deleteClients = async (id) => {
  const verifyId = await clientModels.getClient(id);
    if(!verifyId) {
      return { code: 404, message: 'Client does not exist' }
    }

  const deleted = await clientModels.deleteClients(id);
  return deleted;
};

export default {
  createClient,
  getClients,
  getClient,
  updateClients,
  deleteClients
};
