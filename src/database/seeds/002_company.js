/**
 * this function seed the database in table company
 * @summary this function manages to populate the database more simply, using json format objects
 * @param {KNEX.JS} knex - knex is the main parameter and where it is possible to perform the insertion in the database in a simple way
 * @return {KNEX.JS} returns knex insert object
 */

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('company')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('company').insert([
        {
          id: 1,
          business_name: 'Schuppe - Spencer',
          suffix: 'LLC',
          industry: 'Tactics',
          catch_phrase: 'Compatible background benchmark',
          bs_company_statement: 'grow global infrastructures',
          logo: 'http://placeimg.com/640/480/business',
          type: 'enable',
          phone_number: '803.658.4521',
          full_address: '2037 Champlin Summit',
          latitude: '-73.1783',
          longitude: '55.6623',
        },
        {
          id: 2,
          business_name: 'Cormier, Hills and OKon',
          suffix: 'and Sons',
          industry: 'Infrastructure',
          catch_phrase: 'Face to face discrete implementation',
          bs_company_statement: 'transition front-end schemas',
          logo: 'http://placeimg.com/640/480/business',
          type: 'brand',
          phone_number: '1-550-860-5001',
          full_address: '77973 Roberta Mews',
          latitude: '-8.2864',
          longitude: '-63.0891',
        },
        {
          id: 3,
          business_name: 'Hodkiewicz Inc',
          suffix: 'Group',
          industry: 'Interactions',
          catch_phrase: 'Self-enabling impactful interface',
          bs_company_statement: 'extend intuitive ROI',
          logo: 'http://placeimg.com/640/480/business',
          type: 'unleash',
          phone_number: '960.220.2672 x4692',
          full_address: '841 Bergstrom Forges',
          latitude: '28.1895',
          longitude: '-50.9781',
        },
      ]);
    });
};
