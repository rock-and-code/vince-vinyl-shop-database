// Import the 'knex' module for interacting with the database
const knex = require("./knex");

/**
 * Retrieves all prices from the database.
 * @returns {Promise} A promise that resolves to an array of all prices.
 */
const getAllPrices = () => {
    return knex("Price").select("*");
}

/**
 * Retrieves a specific price by its ID.
 * @param {number} id - The ID of the price to retrieve.
 * @returns {Promise} A promise that resolves to the retrieved price.
 */
const getPriceById = (id) => {
    return knex("Price").select("*").where("id", id);
}

/**
 * Updates a price with the provided data.
 * @param {number} id - The ID of the price to update.
 * @param {object} price - The updated price data.
 * @returns {Promise} A promise that resolves when the update is complete.
 */
const updatePrice = (id, price) => {
    return knex("Price").where("id", id).update(price);
}

/**
 * Deletes a price by its ID from the database.
 * @param {number} id - The ID of the price to delete.
 * @returns {Promise} A promise that resolves when the deletion is complete.
 */
const deletePrice = (id) => {
     return knex("Price").where("id", id).del();
}

/**
 * Inserts a new price into the database.
 * @param {object} price - The price to insert.
 * @returns {Promise} A promise that resolves when the insertion is complete.
 */
const insertPrice = (price) => {
    return knex("Price").insert(price);
}

module.exports = {
    getAllPrices,
    getPriceById,
    insertPrice,
    deletePrice,
    updatePrice
}
