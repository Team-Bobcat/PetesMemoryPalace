const Sequelize = require('sequelize');
const images = require('./images');
const nodes = require('./nodes'); // nodes are memories on an image
const palaces = require('./palaces');
const users = require('./users');

// helpful link: https://github.com/feathersjs/generator-feathers/issues/94

module.exports = () => {
  const app = this;

  const sequelize = new Sequelize(`${process.env.DB_DB}`, `${process.env.DB_USER}`, `${process.env.DB_PASSWORD}`, {
    host: `${process.env.DB_HOST}`,
    dialect: 'postgres',
    logging: console.log
  });

  app.set('sequalize', sequelize);

  app.configure(images);
  app.configure(nodes);
  app.configure(palaces);
  app.configure(users);

  app.set('models', sequelize.models);

  Object.keys(sequelize.models).forEach(modelName => {
    if ("associate" in sequelize.models[modelName]) {
      sequelize.models[modelName].associate();
    }
  });

  sequelize.sync();
}

