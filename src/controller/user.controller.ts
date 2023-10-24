import { Request, Response } from 'express';
import userService from '../service/user.service';

const login = async (req: Request, res: Response): Promise<void> => {
  const { username, password } = req.body;

  if (!username || !password) {
    res.status(400)
      .json({ message: '"username" and "password" are required' });
    return;
  }

  const serviceResponse = await userService.login(username, password);
  res.status(Number(serviceResponse.status)).json(serviceResponse.data);
};

export default {
  login,
};