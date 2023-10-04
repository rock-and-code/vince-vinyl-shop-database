// Import the 'knex' module for interacting with the database
const knex = require("./knex");

/**
 * Retrieves all purchase orders from the database.
 * @returns {Promise} A promise that resolves to an array of all purchase orders.
 */
const getAllPurchaseOrders = () => {
    return knex("PurchaseOrder").select("*");
}

/**
 * Retrieves a specific purchase order by its ID.
 * @param {number} id - The ID of the purchase order to retrieve.
 * @returns {Promise} A promise that resolves to the retrieved purchase order.
 */
const getPurchaseOrderById = (id) => {
    return knex("PurchaseOrder").select("*").where("id", id);
}

/**
 * Updates a purchase order with the provided data.
 * @param {number} id - The ID of the purchase order to update.
 * @param {object} purchaseOrder - The updated purchase order data.
 * @returns {Promise} A promise that resolves when the update is complete.
 */
const updatePurchaseOrder = (id, purchaseOrder) => {
    return knex("PurchaseOrder").where("id", id).update(purchaseOrder);
}

/**
 * Deletes a purchase order by its ID from the database.
 * @param {number} id - The ID of the purchase order to delete.
 * @returns {Promise} A promise that resolves when the deletion is complete.
 */
const deletePurchaseOrder = (id) => {
     return knex("PurchaseOrder").where("id", id).del();
}

/**
 * Inserts a new purchase order into the database.
 * @param {object} purchaseOrder - The purchase order to insert.
 * @returns {Promise} A promise that resolves when the insertion is complete.
 */
const insertPurchaseOrder = (purchaseOrder) => {
    return knex("PurchaseOrder").insert(purchaseOrder);
}

module.exports = {
    getAllPurchaseOrders,
    getPurchaseOrderById,
    insertPurchaseOrder,
    deletePurchaseOrder,
    updatePurchaseOrder
}
