import { Request, Response, NextFunction } from 'express';

const error400 = 400;
const error422 = 422;

const priceValidate = (req: Request, res: Response, next: NextFunction): void => {
  const { price } = req.body;

  if (!price) {
    res.status(error400).json({ message: '"price" is required' });
    return;
  }

  if (typeof price !== 'string') {
    res.status(error422).json({ message: '"price" must be a string' });
    return;
  }

  if (price.length <= 2) {
    res.status(error422)
      .json({ message: '"price" length must be at least 3 characters long' });

    return;
  }
  next(); // Chame o próximo middleware se os dados forem válidos
  // Adicione uma declaração de retorno vazia para satisfazer o TypeScript
};

const nameValidate = (req: Request, res: Response, next: NextFunction): void => {
  const { name } = req.body;

  if (!name) {
    res.status(error400).json({ message: '"name" is required' });
    return;
  }
  if (typeof name !== 'string') {
    res.status(error422).json({ message: '"name" must be a string' });
    return;
  }

  if (name.length < 3) {
    res.status(error422).json({ message: '"name" length must be at least 3 characters long' });
    return;
  }

  next();
};

export { priceValidate, nameValidate };