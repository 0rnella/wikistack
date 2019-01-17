const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack');

const Page = db.define('pages', {
    title: {type: Sequelize.STRING, allowNull: false},
    slug: Sequelize.STRING,
    content: Sequelize.TEXT,
    status: {type: Sequelize.BOOLEAN, defaultValue: true}
})

module.exports = {
    db
  }
