import jwt from 'jsonwebtoken';

const secret = 'dawdwadwad';
const expiresIn = '3D';

export function generateToken(user: IUser) {
  const data = Object();
  data.username = user.username;
  data.id = user.id;

  return jwt.sign(data, secret, { expiresIn });
}

export function verifyToken(token: string) {
  return jwt.verify(token, secret);
}
