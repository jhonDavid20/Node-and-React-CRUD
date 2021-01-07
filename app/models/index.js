const dbConfig = require("../config/db./config.js");

const Sequilize = require("sequelize");
const sequileze = new Sequilize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};

db.Sequilize = Sequilize;
db.sequileze = sequileze;

db.tutorials = require("./models.js")(sequilize,Sequilize);

module.exports = db;