exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('desktops')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('desktops').insert([
        {
          id: 1,
          platform: 'windows',
          type: 'workstation',
          os: 'Windows 10',
          ip: '200.65.189.93',
          company_id: 1,
        },
        {
          id: 2,
          platform: 'unix',
          type: 'server',
          os: 'Windows 10',
          ip: '175.212.98.24',
          company_id: 1,
        },
        {
          id: 3,
          platform: 'windows',
          type: 'workstation',
          os: 'Windows 10',
          ip: '130.175.71.8',
          company_id: 2,
        },
        {
          id: 4,
          platform: 'windows',
          type: 'workstation',
          os: 'Windows 10',
          ip: '251.40.61.76',
          company_id: 3,
        },
        {
          id: 5,
          platform: 'windows',
          type: 'workstation',
          os: 'Catalina (10.15)',
          ip: '0.255.168.51',
          company_id: 3,
        },
      ]);
    });
};
