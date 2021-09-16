import knex from '../../database';

class ContributorsController {
  async index(req, res, next) {
    try {
      const { company_id } = req.query;

      if (company_id) {
        //obetendo todos os desktops de uma empresas
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
