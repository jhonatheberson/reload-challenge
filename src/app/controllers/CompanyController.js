import knex from '../../database';
import * as Yup from 'yup'; // pacote de validação
import { NONE } from 'sequelize';

class CompanyController {
  async index(req, res, next) {
    try {
      const company = await knex('company');

      return res.json(company);
    } catch (error) {
      next(error);
    }
  }

  async store(req, res, next) {
    try {
      let column_company = [
        'business_name',
        'suffix',
        'industry',
        'catch_phrase',
        'bs_company_statement',
        'logo',
        'type',
        'phone_number',
        'full_address',
        'latitude',
        'longitude',
      ];

      let column_contributors = [
        'firstName',
        'lastName',
        'title',
        'jobTitle',
        'age',
      ];
      let column_desktops = ['platform', 'type', 'os', 'ip'];
      let results = [];
      if (req.query.company !== undefined) {
        for (var i = 0; i < column_company.length; i++) {
          const find = await knex('company').where(
            column_company[i],
            'like',
            '%' + req.query.company + '%'
          );
          if (find.length !== 0) {
            results.push(find);
          }
        }
      } else if (req.query.contributors !== undefined) {
        for (var i = 0; i < column_contributors.length; i++) {
          const find = await knex('contributors').where(
            column_contributors[i],
            'like',
            '%' + req.query.contributors + '%'
          );
          if (find.length !== 0) {
            results.push(find);
          }
        }
      } else {
        for (var i = 0; i < column_desktops.length; i++) {
          const find = await knex('desktops').where(
            column_desktops[i],
            'like',
            '%' + req.query.desktops + '%'
          );
          if (find.length !== 0) {
            results.push(find);
          }
        }
      }

      return res.json(results);
    } catch (error) {
      next(error);
    }
  }
}

export default new CompanyController();
