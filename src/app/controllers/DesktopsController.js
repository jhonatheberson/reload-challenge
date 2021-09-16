import knex from '../../database';

class DesktopsController {
  async index(req, res, next) {
    try {
      const { company_id } = req.query;

      if (company_id) {
        //obetendo todos os desktops de uma empresas
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
        //obetendo todos os desktops de todas as empresas
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
