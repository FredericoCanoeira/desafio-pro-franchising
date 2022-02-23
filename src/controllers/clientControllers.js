import clientServices from '../services/clientServices.js'

const createClient = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const registered = await clientServices.createClient(name, email, password);
      if (registered.message) {
        return res.status(registered.code).json({ message: registered.message });
      }
    return res.status(201).json(registered)
  } catch(error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

const getClients = async (_req, res) => {
  try {
    // const userInfo = req.user;
    const clients = await clientServices.getClients(/* userInfo */)
      if (clients.message) {
        return res.status(clients.code).json({ message: clients.message });
      }
    return res.status(200).json(clients)
  } catch(error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

const getClient = async (req, res) => {
  try {
    const { id } = req.params;
    // const userInfo = req.user;
    const client = await clientServices.getClient(id/* , userInfo */);
      if (client.message) {
        return res.status(client.code).json({ message: client.message });
      }
    return res.status(200).json(client);
  } catch(error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

const updateClients = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, password } = req.body;
    // const userInfo = req.user;
    const edit = await clientServices.updateClients(id, name, email, password/* , userInfo */);
      if (edit.message) {
        return res.status(edit.code).json({ message: edit.message });
      }
    return res.status(200).json(edit)
  } catch(error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

const deleteClients = async (req, res) => {
  try {
    const { id } = req.params;
    // const userInfo = req.user;
    const exclude = await clientServices.deleteClients(id/* , userInfo */);
      if (exclude.message) {
        return res.status(exclude.code).json({ message: exclude.message });
      }
    return res.status(204).end();
  } catch(error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

export default {
  createClient,
  getClients,
  getClient,
  updateClients,
  deleteClients
};
