const sequelize = require("../config/connection");
const { User } = require("../models");

const userdata = [
  {
    username: "blackwidow",
    email: "blackwidow@avengers.com",
    password: "password123",
  },
  {
    username: "captinamerica",
    email: "captinamerica@avengers.com",
    password: "password123",
  },
  {
    username: "captinmarvel",
    email: "captinmarvel@avengers.com",
    password: "password123",
  },
  {
    username: "wonderwoman",
    email: "wonderwoman@dc.com",
    password: "password123",
  },
  {
    username: "batman",
    email: "batman@dc.com",
    password: "password123",
  },
  {
    username: "superman",
    email: "superman@dc.com",
    password: "password123",
  },
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;
