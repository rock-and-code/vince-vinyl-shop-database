// Import the 'knex' module for interacting with the database
const knex = require("./knex");

/**
 * Retrieves all costs from the database.
 * @returns {Promise} A promise that resolves to an array of all costs.
 */
const getAllCosts = () => {
    return knex("Cost").select("*");
}

/**
 * Retrieves a specific cost by its ID.
 * @param {number} id - The ID of the cost to retrieve.
 * @returns {Promise} A promise that resolves to the retrieved cost.
 */
const getCostById = (id) => {
    return knex("Cost").select("*").where("id", id);
}

/**
 * Updates a cost with the provided data.
 * @param {number} id - The ID of the cost to update.
 * @param {object} cost - The updated cost data.
 * @returns {Promise} A promise that resolves when the update is complete.
 */
const updateCost = (id, cost) => {
    return knex("Cost").where("id", id).update(cost);
}

/**
 * Deletes a cost by its ID from the database.
 * @param {number} id - The ID of the cost to delete.
 * @returns {Promise} A promise that resolves when the deletion is complete.
 */
const deleteCost = (id) => {
     return knex("Cost").where("id", id).del();
}

/**
 * Inserts a new cost into the database.
 * @param {object} cost - The cost to insert.
 * @returns {Promise} A promise that resolves when the insertion is complete.
 */
const insertCost = (cost) => {
    return knex("Cost").insert(cost);
}

module.exports = {
    getAllCosts,
    getCostById,
    insertCost,
    deleteCost,
    updateCost
}
