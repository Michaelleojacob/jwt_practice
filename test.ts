// const users = [{ name: "migs", pw: "wigs", id: 1 }];

// const findUserById = (id: number) =>
//   users.find((user) => user.id === id) || false;
// const findUserByName = (name: string) =>
//   users.find((user) => user.name === name) || false;

// console.log(findUserByName("jj"));

// import jwt, { Secret, JwtPayload } from 'jsonwebtoken';
// import { Request, Response, NextFunction } from 'express';

// export const SECRET_KEY: Secret = 'your-secret-key-here';

// export interface CustomRequest extends Request {
//  token: string | JwtPayload;
// }

// export const auth = async (req: Request, res: Response, next: NextFunction) => {
//  try {
//    const token = req.header('Authorization')?.replace('Bearer ', '');

//    if (!token) {
//      throw new Error();
//    }

//    const decoded = jwt.verify(token, SECRET_KEY);
//    (req as CustomRequest).token = decoded;

//    next();
//  } catch (err) {
//    res.status(401).send('Please authenticate');
//  }
// };
