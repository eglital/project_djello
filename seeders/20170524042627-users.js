"use strict";
const models = require("./../models");
const bcrypt = require("bcrypt");

module.exports = {
  up: function(queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    var users = [];
    users.push({
      email: "egle@gmail.com",
      passwordHash: bcrypt.hashSync("123456", 8)
    });
    ["charlie", "alex"].forEach(name => {
      users.push({
        email: `${name}@gmail.com`,
        passwordHash: bcrypt.hashSync("123456", 8)
      });
    });
    return queryInterface.bulkInsert("Users", users);
  },

  down: function(queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete("Users", null, {}, models.User);
  }
};
