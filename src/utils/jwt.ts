import jwt from 'jsonwebtoken';

type TokenPay = { id: number, username: string };

const JWT_SECRET = process.env.JWT_SECRET || 'secretMessage';

function sign(payload:TokenPay): string {
  const token = jwt.sign(payload, JWT_SECRET);
  return token;
}

function verify(token: string): TokenPay {
  const verif = jwt.verify(token, JWT_SECRET) as TokenPay;
  return verif;
}

export default { sign, verify };