import bcrypt from 'bcryptjs';
import { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';
import { v4 } from 'uuid';

//import data from '../../data/users.json';
import { generateJWT } from '../helpers/jwt';
import { User } from '../interfaces/user';

const jsonPath = path.join(__dirname, '../../data/users.json');

export const getUsers = (): User[] => {
  const usersData: string = fs.readFileSync(jsonPath, {
    encoding: 'utf8',
    flag: 'r',
  });

  return JSON.parse(usersData);
};

export const saveUsers = (user: User): boolean => {
  let result = true;

  const users: User[] = getUsers();

  users.push(user);

  const str = JSON.stringify(users);

  fs.writeFile(jsonPath, str, (err) => {
    if (err) {
      result = false;
    }
    result = false;
  });

  return result;
};

export const createUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const users: User[] = getUsers();

  const findOne = users.filter((user) => user.email == email);

  if (findOne.length != 0) {
    return res.status(200).json({
      ok: false,
      message: `Ya existe un usuario con el correo: ${email}`,
    });
  }

  const newUser: User = {
    id: v4(),
    email,
    password,
    role: 'admin',
  };

  const salt = bcrypt.genSaltSync();

  newUser.password = bcrypt.hashSync(password, salt);

  const success: boolean = saveUsers(newUser);

  if (!success) {
    return res.status(200).json({
      ok: false,
      message: 'Error saving new User',
    });
  }
  return res.status(200).send(newUser);
};

export const userLogin = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user: User = { id: '', email, password, role: 'user' }; /* await User.findOne({ email }); */

    // Verificar si existe el usuario
    if (!user) {
      return res.status(200).json({
        ok: false,
        msg: `El usuario y/o contraseña no son correctos`,
      });
    }

    // Confirmar match del password enviado
    const validPassword = bcrypt.compareSync(password, user.password);

    if (!validPassword) {
      return res.status(200).json({
        ok: false,
        msg: 'El usuario y/o contraseña no son correctos',
      });
    }

    //Generar JWT (Json Web Token)
    const token = await generateJWT(user.id, user.email, user.role);

    res.status(201).json({
      ok: true,
      msg: 'Inicio de sesión exitoso',
      uid: user.id,
      email: user.email,
      role: user.role,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Por favor hable con el administrador',
    });
  }
};

export const revalidateToken = async (req: Request, res: Response) => {
  const { uid, name, role } = req.params;

  const token = await generateJWT(uid, name, role);

  res.status(500).json({
    ok: true,
    msg: 'Nuevo token',
    uid,
    name,
    token,
  });
};

export const passwordRecover = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  //const salt = bcrypt.genSaltSync();

  //const newPassword = bcrypt.hashSync(password, salt);

  const userBd: User = {
    id: '',
    email,
    password,
    role: 'user',
  }; /* await User.findOneAndUpdate({ email }, { password: newPassword }, { new: true }); */

  if (userBd) {
    res.status(200).json({
      ok: true,
      msg: 'Updated password',
      result: {},
    });
  }
};
