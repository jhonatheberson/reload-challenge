import * as Yup from 'yup'; // pacote de validação
import knex from '../../database';
import bcrypt from 'bcryptjs';
/**
 * this class controls the users
 */
class UserController {
  /**
   * this function does the post method control
   * @summary this function creates users
   * @param {Express} req - this parameter is responsible for bringing the data sent (request)
   * @param {Express} res - this para is responsible for returning the answer (response)
   * @param {Express} next - this parameter is responsible for when an error occurs, or ecession it is called, by default, in this case it is used here to return the error
   * @return {json} returns json com status code
   */
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
  /**
   * this function does the get method control
   * @summary this function list users
   * @param {Express} req - this parameter is responsible for bringing the data sent (request)
   * @param {Express} res - this para is responsible for returning the answer (response)
   * @param {Express} next - this parameter is responsible for when an error occurs, or ecession it is called, by default, in this case it is used here to return the error
   * @return {json} returns json com users
   */
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
