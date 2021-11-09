const Sequelize = require('sequelize');


var seq = new Sequelize('moo', 'root', '' , {
  host: 'localhost',
  dialect: 'mysql',
  dialectOptions: {
    socketPath: '/var/run/mysqld/mysqld.sock'
  },
});

// seq.authenticate().then(() => seq.sync({ force: true }));


module.exports = seq;
