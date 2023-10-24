import bcrypt from 'bcryptjs';
import UserModel from '../database/models/user.model';
import jwt from '../utils/jwt';
import { ServiceResponse } from '../types/Login';

type Token = {
  token: string,
};

const login = async (username: string, password: string)
: Promise<ServiceResponse<Token>> => {
  const foundUser = await UserModel.findOne({
    where: { username },
  });

  if (!foundUser || !bcrypt.compareSync(password, foundUser.dataValues.password)) {
    return { status: 401, data: { message: 'Username or password invalid' } };
  }

  const { id } = foundUser.dataValues;

  const token = jwt.sign({ username, id });

  return { status: 200, data: { token } };
};

export default {
  login,
};