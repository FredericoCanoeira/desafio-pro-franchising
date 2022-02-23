import bcrypt from 'bcrypt'

const saltRounds = 10;

const createHashPassword = async(password) => {
  const encrypt = await bcrypt.hash(password, saltRounds);
  return encrypt;
};

const isPasswordEqual = async (password, hashPassword) => {
  try {
    const result = await bcrypt.compare(password, hashPassword);
    return result;
  } catch (error) {
    console.log(error);
  }
}

export default {
  createHashPassword,
  isPasswordEqual,
};
