import loginServices from '../services/loginServices.js';

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const token = await loginServices.login(email, password)
      if (token.message) {
        return res.status(token.code).json({ message: token.message });
      }
    return res.status(200).json({ token });
  } catch(error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

export default { login };