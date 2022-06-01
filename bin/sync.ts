const model = require('../models/index');

model.sequelize.sync({ force: true });
//model.sequelize.sync({ alter: true });
