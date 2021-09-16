import knex from '../../database';
import jwt from 'jsonwebtoken';
import * as Yup from 'yup'; // pacote de validação
import authConfig from '../../config/auth';
import bcrypt from 'bcryptjs';
/**
 * this class controls the session the users
 */
class SessionController {
  /**
   * this function does the post method control
   * @summary this function creates a token for a user
   * @param {Express} req - this parameter is responsible for bringing the data sent (request)
   * @param {Express} res - this para is responsible for returning the answer (response)
   * @param {Express} next - this parameter is responsible for when an error occurs, or ecession it is called, by default, in this case it is used here to return the error
   * @return {json} returns json object containing users and token
   */
  async store(req, res, next) {
    try {
      const schema = Yup.object().shape({
        email: Yup.string().email().required(),
        password: Yup.string().required(), // password field is string, required
      });

      if (!(await schema.isValid(req.body))) {
        return res.status(400).json({ error: 'Validation fails' });
      }
      const { email, password } = req.body;

      const user = await knex('users').where('email', email);

      if (!user) {
        return res.status(401).json({ error: 'User not found ' });
      }

      var { id, name, password_hash } = user[0];
      var result = await bcrypt.compare(password, password_hash);

      if (!result) {
        return res.status(401).json({ error: 'Password does not match' });
      }

      return res.json({
        user: {
          id,
          name,
          email,
        },
        // id, MD5 cript, prazo de expiração
        token: jwt.sign({ id }, authConfig.secret, {
          expiresIn: authConfig.expires,
        }),
      });
    } catch (error) {
      next(error);
    }
  }
}

export default new SessionController();
