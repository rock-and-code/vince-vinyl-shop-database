// Import the 'knex' module for interacting with the database
const knex = require("./knex");

/**
 * Retrieves all stocks from the database.
 * @returns {Promise} A promise that resolves to an array of all stocks.
 */
const getAllStocks = () => {
    return knex("Stock").select("*");
}

/**
 * Retrieves a specific stock by its ID.
 * @param {number} id - The ID of the stock to retrieve.
 * @returns {Promise} A promise that resolves to the retrieved stock.
 */
const getStockById = (id) => {
    return knex("Stock").select("*").where("id", id);
}

/**
 * Updates a stock with the provided data.
 * @param {number} id - The ID of the stock to update.
 * @param {object} stock - The updated stock data.
 * @returns {Promise} A promise that resolves when the update is complete.
 */
const updateStock = (id, stock) => {
    return knex("Stock").where("id", id).update(stock);
}

/**
 * Deletes a stock by its ID from the database.
 * @param {number} id - The ID of the stock to delete.
 * @returns {Promise} A promise that resolves when the deletion is complete.
 */
const deleteStock = (id) => {
     return knex("Stock").where("id", id).del();
}

/**
 * Inserts a new stock into the database.
 * @param {object} stock - The stock to insert.
 * @returns {Promise} A promise that resolves when the insertion is complete.
 */
const insertStock = (stock) => {
    return knex("Stock").insert(stock);
}

module.exports = {
    getAllStocks,
    getStockById,
    insertStock,
    deleteStock,
    updateStock
}
