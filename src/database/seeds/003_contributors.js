exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('contributors')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('contributors').insert([
        {
          id: 1,
          firstName: 'Hailee',
          lastName: 'Davis',
          title: 'Corporate Security Liaison',
          jobTitle: 'Legacy Implementation Strategist',
          age: 23,
          company_id: 1,
        },
        {
          id: 2,
          firstName: 'Clare',
          lastName: 'Davis',
          title: 'Corporate Security Liaison',
          jobTitle: 'Legacy Implementation Strategist',
          age: 23,
          company_id: 1,
        },
        {
          id: 3,
          firstName: 'Elvis',
          lastName: 'Davis',
          title: 'Corporate Security Liaison',
          jobTitle: 'Human Data Associate',
          age: 23,
          company_id: 2,
        },
        {
          id: 4,
          firstName: 'Randall',
          lastName: 'Davis',
          title: 'Corporate Security Liaison',
          jobTitle: 'Legacy Implementation Strategist',
          age: 23,
          company_id: 3,
        },
        {
          id: 5,
          firstName: 'Leda',
          lastName: 'Davis',
          title: 'Corporate Security Liaison',
          jobTitle: 'Legacy Implementation Strategist',
          age: 23,
          company_id: 3,
        },
        {
          id: 6,
          firstName: 'Hailee',
          lastName: 'Davis',
          title: 'Corporate Security Liaison',
          jobTitle: 'Legacy Implementation Strategist',
          age: 23,
          company_id: 1,
        },
      ]);
    });
};
