import * as Yup from 'yup'; // pacote de validação
import knex from '../../database';
import User from '../models/User';
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

      // const userExists = await knex('users').whereNotExists(function () {
      //   this.select('*').from('email').whereRaw('users.email req.body.email');
      // });
      const userExists = await knex('users').count('email').where('email', req.body.email);
      // const userExists = await User.findOne({ where: { email: req.body.email } }); // verifica se ja existe esse email no banco

      if (userExists[0]['count(`email`)'] != 0) {
        return res.status(400).json({ error: 'User already exists' });
      }

      const {name, email, password} = req.body;

      if (password) {
        var password_hash = await bcrypt.hash(password, 8);
      }

      const user = await knex('users').insert({
        name,
        email,
        password_hash,
      });


      // const user = await User.create(req.body); // "await" é para realizar as coisas assincronas
      // const { id, name, email, provider } = await User.create(req.body); // "await" é para realizar as coisas assincronas
      console.log(user)


      // return res.json(user);
      return res.status(201).send()
    } catch (error) {
      next(error);
    }


  }


  async index(req, res){
    const results = await knex('users')

    return res.json(results)
  }
}

export default new UserController();
