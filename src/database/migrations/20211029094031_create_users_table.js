const { Knex } = require("knex");

/**
 *
 * @param {Knex} knex
 */
const up = (knex) => {
  return knex.schema.createTable("users", (t) => {
    t.increments("id").primary();
    t.string("email", 255).notNullable();
    t.string("password", 128);
  });
};

/**
 *
 * @param {Knex} knex
 */
const down = (knex) => {
  return knex.schema.dropTable("users");
};

module.exports = { up, down };
