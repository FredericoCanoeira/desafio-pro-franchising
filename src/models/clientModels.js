import connection from './connection.js';
import { ObjectId } from 'mongodb';

const createClient = async (name, email, password) => {
  const { insertedId: _id } = await connection().then((db) => db.collection('clients')
    .insertOne({ name, email, password, role: 'user' }));

  const createdClient = getClient(_id)
  return createdClient;
};

const getClients = async () => {
  const clients = await connection()
    .then((db) => db.collection('clients').find().toArray());
 
  return clients;
};

const getClient = async (id) => {
  if (!ObjectId.isValid(id)) return null;
  const search = await connection()
    .then((db) => db.collection('clients').findOne(ObjectId(id)));
  return search;
};

const findEmailClient = async (email) => {
  const search = await connection()
    .then((db) => db.collection('clients').findOne({ email }));
  return search;
};

const updateClients = async (id, name, email, password) => {
  await connection()
    .then((db) => db
      .collection('clients')
      .updateOne({ _id: ObjectId(id) }, { $set: { name, email, password } }));
  
  const updatedClient = getClient(id)
  return updatedClient;
};

const deleteClients = async (id) => {
  const exclude = await connection()
    .then((db) => db
      .collection('clients')
      .deleteOne({ _id: ObjectId(id) }));
  return exclude;
};


export default {
  createClient,
  findEmailClient,
  getClients,
  getClient,
  updateClients,
  deleteClients
};
