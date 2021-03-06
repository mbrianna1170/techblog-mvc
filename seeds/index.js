//link seed files
const seedPosts = require("./post-seeds");
const seedUsers = require("./user-seeds");
const seedComments = require("./comment-seeds");

const sequelize = require("../config/connection");
//connections
const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");
  
  await seedUsers();
  console.log("\n----- USERS SEEDED -----\n");

  await seedPosts();
  console.log("\n----- BOOKS SEEDED -----\n");

  await seedComments();
  console.log("\n-----  COMMENTS SEEDED -----\n");

  process.exit(0);
};

//call all seeds
seedAll();
