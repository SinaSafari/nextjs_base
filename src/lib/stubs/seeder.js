const { Knex } = require("knex");

/**
 *
 * @param {Knex} knex
 */
const seed = (knex) => {
  return knex("table_name")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("table_name").insert([
        { id: 1, colName: "rowValue1" },
        { id: 2, colName: "rowValue2" },
        { id: 3, colName: "rowValue3" },
      ]);
    });
};

module.exports = { seed };
