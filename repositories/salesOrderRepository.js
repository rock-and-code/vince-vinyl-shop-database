// Import the 'knex' module for interacting with the database
const knex = require("./knex");

/**
 * Retrieves all sales orders from the database.
 * @returns {Promise} A promise that resolves to an array of all sales orders.
 */
const getAllSalesOrders = () => {
    return knex("SalesOrder").select("*");
}

/**
 * Retrieves a specific sales order by its ID.
 * @param {number} id - The ID of the sales order to retrieve.
 * @returns {Promise} A promise that resolves to the retrieved sales order.
 */
const getSalesOrderById = (id) => {
    return knex("SalesOrder").select("*").where("id", id);
}

/**
 * Updates a sales order with the provided data.
 * @param {number} id - The ID of the sales order to update.
 * @param {object} salesOrder - The updated sales order data.
 * @returns {Promise} A promise that resolves when the update is complete.
 */
const updateSalesOrder = (id, salesOrder) => {
    return knex("SalesOrder").where("id", id).update(salesOrder);
}

/**
 * Deletes a sales order by its ID from the database.
 * @param {number} id - The ID of the sales order to delete.
 * @returns {Promise} A promise that resolves when the deletion is complete.
 */
const deleteSalesOrder = (id) => {
     return knex("SalesOrder").where("id", id).del();
}

/**
 * Inserts a new sales order into the database.
 * @param {object} salesOrder - The sales order to insert.
 * @returns {Promise} A promise that resolves when the insertion is complete.
 */
const insertSalesOrder = (SalesOrder) => {
    return knex("SalesOrder").insert(salesOrder);
}

module.exports = {
    getAllSalesOrders,
    getSalesOrderById,
    insertSalesOrder,
    deleteSalesOrder,
    updateSalesOrder
}
