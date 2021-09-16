import * as Yup from 'yup'; // pacote de validação
import knex from '../../database';
import bcrypt from 'bcryptjs';

class UserController {
  async store(req, res, next) {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required(), // o compo name é string e obrigatorio
        email: Yup.string().email().required(),
        password: Yup.string().required().min(6), // compo senha é string, obrigatorio, com minimo de caractere igual a 6
      });

      if (!(await schema.isValid(req.body))) {
        return res.status(401).json({ error: 'Validation fails' });
      }

      const userExists = await knex('users')
        .count('email')
        .where('email', req.body.email);

      if (userExists[0]['count(`email`)'] != 0) {
        return res.status(400).json({ error: 'User already exists' });
      }

      const { name, email, password } = req.body;

      const password_hash = await bcrypt.hash(password, 8);

      const user = await knex('users').insert({
        name,
        email,
        password_hash,
      });

      // return res.json(user);
      return res.status(201).send();
    } catch (error) {
      next(error);
    }
  }

  async index(req, res) {
    try {
      const results = await knex('users');

      return res.json(results);
    } catch (error) {
      next(error);
    }
  }
}

export default new UserController();
