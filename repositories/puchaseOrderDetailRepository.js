// Import the 'knex' module for interacting with the database
const knex = require("./knex");

/**
 * Retrieves all purchase order details from the database.
 *
 * @returns {Promise<Array>} A promise that resolves to an array of all purchase order details.
 */
const getAllPurchaseOrderDetails = () => {
    return knex("PurchaseOrderDetail").select("*");
}

/**
 * Retrieves all purchase order details from the database by a given purchase order ID.
 *
 * @param {number} purchaseOrderId - The ID of the purchase order.
 * @returns {Promise<Array>} A promise that resolves to an array of all purchase order details by a given Purchase Order ID.
 */
const getAllPurchaseOrderDetailsByPurchaseOrderId = (purchaseOrderId) => {
    return knex("PurchaseOrderDetail").select("*").where("purchase_order_id", purchaseOrderId);
}

/**
 * Deletes all purchase order details associated with a given purchase order ID.
 *
 * @param {number} purchaseOrderId - The ID of the purchase order.
 * @returns {Promise} A promise that resolves when the deletion is complete.
 */
const deleteAllPurchaseOrderDetailsByPurchaseOrderId = (purchaseOrderId) => {
    return knex("PurchaseOrderDetail").where("purchase_order_id", purchaseOrderId).del();
}

/**
 * Retrieves a specific purchase order detail by its ID.
 *
 * @param {number} id - The ID of the purchase order detail to retrieve.
 * @returns {Promise<Object|null>} A promise that resolves to the retrieved purchase order detail, or null if not found.
 */
const getPurchaseOrderDetailById = (id) => {
    return knex("PurchaseOrderDetail").select("*").where("id", id);
}

/**
 * Updates a purchase order detail with the provided data.
 *
 * @param {number} purchaseOrderId - The ID of the purchase order detail to update.
 * @param {number} albumId - The ID of the album detail to update.
 * @param {object} purchaseOrderDetail - The updated purchase order detail data.
 * @returns {Promise} A promise that resolves when the update is complete.
 */
const updatePurchaseOrderDetail = (purchaseOrderId, albumId, purchaseOrderDetail) => {
    return knex("PurchaseOrderDetail").where({ purchase_order_id: purchaseOrderId, album_id: albumId }).update(purchaseOrderDetail);
}

/**
 * Updates all purchase order details with the provided data.
 *
 * @param {number} purchaseOrderId - The ID of the purchase order detail to update.
 * @param {Array<object>} purchaseOrderDetails - An array containing the updated purchase order details data.
 * @returns {Promise} A promise that resolves when the update is complete.
 */
const updateAllPurchaseOrderDetail = async (purchaseOrderId, purchaseOrderDetails) => {
    try {
        await knex.transaction(async trx => {
            // Delete all the purchase order details associated with the given purchase order
            await trx("PurchaseOrderDetail").where("purchase_order_id", purchaseOrderId).del();

            // Insert the updated purchase order details
            for (let purchaseOrderDetail of purchaseOrderDetails) {
                await trx("PurchaseOrderDetail").insert(purchaseOrderDetail);
            }
        })
    } catch (error) {
        throw new Error(error);
    }
}

/**
 * Deletes a purchase order detail by its ID from the database.
 *
 * @param {number} id - The ID of the purchase order detail to delete.
 * @returns {Promise} A promise that resolves when the deletion is complete.
 */
const deletePurchaseOrderDetail = (id) => {
    return knex("PurchaseOrderDetail").where("id", id).del();
}

/**
 * Inserts a new purchase order detail into the database.
 *
 * @param {object} purchaseOrderDetail - The purchase order detail to insert.
 * @returns {Promise} A promise that resolves when the insertion is complete.
 */
const insertPurchaseOrderDetail = (purchaseOrderDetail) => {
    return knex("PurchaseOrderDetail").insert(purchaseOrderDetail);
}

module.exports = {
    getAllPurchaseOrderDetails,
    getAllPurchaseOrderDetailsByPurchaseOrderId,
    deleteAllPurchaseOrderDetailsByPurchaseOrderId,
    updateAllPurchaseOrderDetail,
    getPurchaseOrderDetailById,
    insertPurchaseOrderDetail,
    deletePurchaseOrderDetail,
    updatePurchaseOrderDetail
}
