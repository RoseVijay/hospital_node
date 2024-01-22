const Sequelize = require("sequelize");
const sequelize = require("../config/keys");

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables
// db.Project = require("../models/Project");
// db.Uploads = require("../models/Uploads");
db.customer = require("../models/user");
// db.Slider = require("../models/Slider");
// db.Oto = require("../models/Oto"); //this table name is projects
// db.Audio = require("../models/Audio");
// db.Category = require("../models/Category");
//Relations
// db.Project.hasMany(db.Slider, { foreignKey: "project_id" });
// db.Oto.hasMany(db.Project, { foreignKey: "project_id" });
// db.Developer = require("../models/Developer");
// db.ShareClient = require("../models/ShareClient");
// db.ShareTemplate = require("../models/ShareTemplate");
// db.Clients = require("../models/Clients");
// db.ClientLink = require("../models/ClientLink");
// db.Comment = require("../models/Comment");
// db.PaymentLogs = require("../models/PaymentLogs");
db.transcribr_data = require("../models/recorder");
module.exports = db;
