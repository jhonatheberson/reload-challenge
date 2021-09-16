import knex from '../../database';
/**
 * this class controls the desktops entity
 */
class DesktopsController {
  /**
   * this function does the get method control
   * @summary this function returns all desktops for a company when the query_params is passed, as well as for all companies, and returns in json format.
   * @param {Express} req - this parameter is responsible for bringing the data sent (request)
   * @param {Express} res - this para is responsible for returning the answer (response)
   * @param {Express} next - this parameter is responsible for when an error occurs, or ecession it is called, by default, in this case it is used here to return the error
   * @return {json} returns json object containing all contributors from a company
   */
  async index(req, res, next) {
    try {
      const { company_id } = req.query;

      if (company_id) {
        // getting all desktops from a company
        var desktops = await knex('desktops')
          .where({ company_id })
          .join('company', 'company.id', '=', 'desktops.company_id')
          .select(
            'desktops.*',
            'company.business_name',
            'company.industry',
            'company.full_address'
          );
      } else {
        // getting all desktops from all companies
        var desktops = await knex('desktops')
          .join('company', 'company.id', '=', 'desktops.company_id')
          .select(
            'desktops.*',
            'company.business_name',
            'company.industry',
            'company.full_address'
          );
      }

      const results = await desktops;

      return res.json(results);
    } catch (error) {
      next(error);
    }
  }
}

export default new DesktopsController();
