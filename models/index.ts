// Packages

// const fs = require("fs");
import * as fs from "fs"
const path = require("path");
//const Sequelize = require("sequelize");

import {
  Association, DataTypes, HasManyAddAssociationMixin, HasManyCountAssociationsMixin,
  HasManyCreateAssociationMixin, HasManyGetAssociationsMixin, HasManyHasAssociationMixin,
  HasManySetAssociationsMixin, HasManyAddAssociationsMixin, HasManyHasAssociationsMixin,
  HasManyRemoveAssociationMixin, HasManyRemoveAssociationsMixin, Model, ModelDefined, Optional,
  Sequelize, InferAttributes, InferCreationAttributes, CreationOptional, NonAttribute, ForeignKey,
} from 'sequelize'
const env = process.env.NODE_ENV || "development";

const basename = path.basename(__filename);
const configdb = require(`${__dirname}/../config/config.json`)[env];
const db: any = {};
//const constant = require("../constants");
let sequelize: any;

sequelize = new Sequelize(
  configdb.database,
  configdb.username,
  configdb.password,
  configdb
);

sequelize
  .authenticate()
  .then(() => {
    console.log("DB connected....");
  })
  .catch((err: any) => {
    console.error("error", err);
  });

fs.readdirSync(__dirname)
  .filter(
    (file: any) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".ts"
  )
  .forEach((file: any) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});
db.sequelize = sequelize;
//db.Sequelize = Sequelize;

module.exports = db;
