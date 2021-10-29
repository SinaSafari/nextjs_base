const { Knex } = require("knex");

/**
 *
 * @param {Knex} knex
 */
const up = (knex) => {
  return knex.schema.createTable("sample", (t) => {});
};

/**
 *
 * @param {Knex} knex
 */
const down = (knex) => {
  return knex.schema.dropTable("sample");
};

module.exports = { up, down };
