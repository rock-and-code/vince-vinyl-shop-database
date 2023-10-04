// Import required repositories and modules
const purchaseOrderRepository = require("../repositories/purchaseOrderRepository");
const purchaseOrderDetailRepository = require("../repositories/puchaseOrderDetailRepository");

/**
 * Retrieves and returns an array containing all the purchase order in the database.
 *
 * @function
 * @returns {Promise<Array>} A promise that resolves to an Array containing all the purchase order in the database.
 */
const getAllPurchaseOrders = async () => {
    // Retrieve all purchase order from the database
    let purchaseOrders = await purchaseOrderRepository.getAllPurchaseOrders();
    // For each purchase order, retrieve its associated purchase order details
    for (let purchaseOrder of purchaseOrders) {
        purchaseOrder["purchase_order_details"] = await purchaseOrderDetailRepository.getAllPurchaseOrderDetailsByPurchaseOrderId(purchaseOrder.id);
    }
    return purchaseOrders;
}

/**
 * Retrieves and returns a purchase order by a given ID if it exists.
 *
 * @function
 * @param {number} id - The ID of the purchase order to retrieve.
 * @returns {Promise<Object|null>} A promise that resolves to the purchase order matching the given ID if it exists, or null if not found.
 */
const getPurchaseOrderById = async (id) => {
    let result = await purchaseOrderRepository.getPurchaseOrderById(id);
    let purchaseOrder = result[0];
    // Retrieve all the purchase order details associated with the purchase order of the given ID
    purchaseOrder["purchase_order_details"] = await purchaseOrderDetailRepository.getAllPurchaseOrderDetailsByPurchaseOrderId(purchaseOrder.id);

    return purchaseOrder;
}

/**
 * Updates the given purchase order in the database.
 *
 * @function
 * @param {number} id - The ID of the purchase order to update.
 * @param {Object} purchaseOrder - The updated purchase order data.
 * @returns {Promise<Object>} A promise that resolves to the updated purchase order.
 */
const updatePurchaseOrder = async (id, purchaseOrder) => {
    try {
        if ("purchase_order_details" in purchaseOrder) {

            await purchaseOrderDetailRepository.updateAllPurchaseOrderDetail(id, purchaseOrder["purchase_order_details"]);

            delete purchaseOrder["purchase_order_details"];
        }

        return await purchaseOrderRepository.updatePurchaseOrder(id, purchaseOrder);
    } catch (error) {
        throw new Error(error);
    }
}

/**
 * Retrieves a purchase order from the database that matches the given ID.
 *
 * @function
 * @param {number} id - The ID of the purchase order to delete.
 * @returns {Promise<Object|null>} A promise that resolves to the deleted purchase order if found, or null if not found.
 */
const deletePurchaseOrder = async (id) => {
    // Delete all the purchase order details associated with the given purchase order ID
    await purchaseOrderDetailRepository.deleteAllPurchaseOrderDetailsByPurchaseOrderId(id);
    // Delete the purchase order from the database
    return purchaseOrderRepository.deletePurchaseOrder(id);
}

/**
 * Inserts a new purchase order into the database.
 *
 * @function
 * @param {Object} purchaseOrder - The new purchase order to insert.
 * @returns {Promise<Object>} A promise that resolves to the new purchase order stored in the database.
 */
const insertPurchaseOrder = async (purchaseOrder) => {
    const purchaseOrderDetails = purchaseOrder["purchase_order_details"];
    // Remove purchase_order_details from the purchase order to avoid SQLite error when saving the order in the database
    // Since the purchase order schema does not include a purchase_order_detail column
    delete purchaseOrder["purchase_order_details"];
    // Insert the new purchase order into the database
    const result = await purchaseOrderRepository.insertPurchaseOrder(purchaseOrder);
    // If there are purchase order details, insert and associate them with the purchase order
    if (purchaseOrderDetails.length > 0) {
        for (let purchaseOrderDetail of purchaseOrderDetails) {
            purchaseOrderDetail["purchase_order_id"] = result[0];
            await purchaseOrderDetailRepository.insertPurchaseOrderDetail(purchaseOrderDetail);
        }
    }
    return result;
}

module.exports = {
    getAllPurchaseOrders,
    getPurchaseOrderById,
    insertPurchaseOrder,
    deletePurchaseOrder,
    updatePurchaseOrder
}
