import knex from '../../database';
import jwt from 'jsonwebtoken';
import * as Yup from 'yup'; // pacote de validação
import authConfig from '../../config/auth';
import bcrypt from 'bcryptjs';

// isso será usado para verificar se o user esta logado
class SesssionController {
  async store(req, res, next) {
    try {
      const schema = Yup.object().shape({
        email: Yup.string().email().required(),
        password: Yup.string().required(), // compo senha é string, obrigatorio
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

export default new SesssionController();
