import knex from '../../database';

/**
 * this class controls the contributors entity
 */
class ContributorsController {
  /**
   * this function does the get method control
   * @summary this function takes all contributors from a company, and returns in json format.
   * @param {Express} req - this parameter is responsible for bringing the data sent (request)
   * @param {Express} res - this para is responsible for returning the answer (response)
   * @param {Express} next - this parameter is responsible for when an error occurs, or ecession it is called, by default, in this case it is used here to return the error
   * @return {json} returns json object containing all contributors from a company
   */
  async index(req, res, next) {
    try {
      const { company_id } = req.query;

      if (company_id) {
        //getting all contributors from a company
        var contributors = await knex('contributors')
          .where({ company_id })
          .join('company', 'company.id', '=', 'contributors.company_id')
          .select(
            'contributors.*',
            'company.business_name',
            'company.industry',
            'company.full_address'
          );
      }
      const results = await contributors;

      return res.json(results);
    } catch (error) {
      next(error);
    }
  }
}

export default new ContributorsController();
