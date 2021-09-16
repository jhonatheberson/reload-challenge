import knex from '../../database';

/**
 * this class controls the company entity
 */
class CompanyController {
  /**
   * this function does the get method control
   * @summary this function takes all the companies, and returns in json format.
   * @param {Express} res - this para is responsible for returning the answer (response)
   * @param {Express} next - this parameter is responsible for when an error occurs, or ecession it is called, by default, in this case it is used here to return the error
   * @return {json} returns json object containing all companies
   */
  async index(req, res, next) {
    try {
      const company = await knex('company');

      return res.json(company);
    } catch (error) {
      next(error);
    }
  }

  /**
   * this function does the post method control.
   * @summary this function will search the database by term, that is, it goes into each column of a chosen table and searches for the past string
   * @param {Express} req - this parameter is responsible for bringing the data sent (request)
   * @param {Express} res - this para is responsible for returning the answer (response)
   * @param {Express} next - this parameter is responsible for when an error occurs, or ecession it is called, by default, in this case it is used here to return the error
   * @return {ReturnValueDataTypeHere} returns companies, contributors, or desktops that have the term in one of their columns
   */
  async store(req, res, next) {
    try {
      //I created this vector to be able to go through all the columns of the table company
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
      //I created this vector to be able to go through all the columns of the table contributors
      let column_contributors = [
        'firstName',
        'lastName',
        'title',
        'jobTitle',
        'age',
      ];
      // I created this vector to be able to go through all the columns of the table desktops
      let column_desktops = ['platform', 'type', 'os', 'ip'];
      // this vector that returns all objects found with the past term
      let results = [];

      // the asymptotic complexity of this search algorithm
      // is O(n²), that is, in the worst case,
      // could do it another way, but it would need more time,
      // and using SQL I think it's unlikely to do it with lower computational cost
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
