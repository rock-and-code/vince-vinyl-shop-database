// Import required repositories and modules
const salesOrderRepository = require("../repositories/salesOrderRepository");
const salesOrderDetailRepository = require("../repositories/salesOrderDetailRepository");

/**
 * Retrieves and returns an array containing all the sales orders in the database.
 *
 * @function
 * @returns {Promise<Array>} A promise that resolves to an Array containing all the sales orders in the database.
 */
const getAllSalesOrders = async () => {
    // Retrieve all sales orders from the database
    let salesOrders = await salesOrderRepository.getAllSalesOrders();
    // For each sales order, retrieve its associated sales order details
    for (let salesOrder of salesOrders) {
        salesOrder["sales_order_details"] = await salesOrderDetailRepository.getAllSalesOrderDetailsBySalesOrderId(salesOrder.id);
    }
    return salesOrders;
}

/**
 * Retrieves and returns a sales order by a given ID if it exists.
 *
 * @function
 * @param {number} id - The ID of the sales order to retrieve.
 * @returns {Promise<Object|null>} A promise that resolves to the sales order matching the given ID if it exists, or null if not found.
 */
const getSalesOrderById = async (id) => {
    let result = await salesOrderRepository.getSalesOrderById(id);
    let salesOrder = result[0];
    // Retrieve all the sales order details associated with the sales order of the given ID
    salesOrder["sales_order_details"] = await salesOrderDetailRepository.getAllSalesOrderDetailsBySalesOrderId(salesOrder.id);

    return salesOrder;
}

/**
 * Updates the given sales order in the database.
 *
 * @function
 * @param {number} id - The ID of the sales order to update.
 * @param {Object} salesOrder - The updated sales order data.
 * @returns {Promise<Object>} A promise that resolves to the updated sales order.
 */
const updateSalesOrder = async (id, salesOrder) => {

    try {
        if ("sales_order_details" in salesOrder) {

            await salesOrderDetailRepository.updateAllSalesOrderDetail(id, salesOrder["sales_order_details"]);

            delete salesOrder["sales_order_details"];
        }

        return await salesOrderRepository.updateSalesOrder(id, salesOrder);
    } catch (error) {
        throw new Error(error);
    }
}

/**
 * Retrieves a sales order from the database that matches the given ID.
 *
 * @function
 * @param {number} id - The ID of the sales order to delete.
 * @returns {Promise<Object|null>} A promise that resolves to the deleted sales order if found, or null if not found.
 */
const deleteSalesOrder = async (id) => {
    // Delete all the sales order details associated with the given sales order ID
    await salesOrderDetailRepository.deleteAllSalesOrderDetailsBySalesOrderId(id);
    // Delete the sales order from the database
    return salesOrderRepository.deleteSalesOrder(id);
}

/**
 * Inserts a new sales order into the database.
 *
 * @function
 * @param {Object} salesOrder - The new sales order to insert.
 * @returns {Promise<Object>} A promise that resolves to the new sales order stored in the database.
 */
const insertSalesOrder = async (salesOrder) => {
    const salesOrderDetails = salesOrder["sales_order_details"];
    // Remove sales_order_details from the sales order to avoid SQLite error when saving the order in the database
    // Since the sales order schema does not include a sales_order_line column
    delete salesOrder["sales_order_details"];
    // Insert the new sales order into the database
    const result = await salesOrderRepository.insertSalesOrder(salesOrder);
    // If there are sales order details, insert and associate them with the sales order
    if (salesOrderDetails.length > 0) {
        let savedSalesOrderLines = [];
        for (let salesOrderDetail of salesOrderDetails) {
            salesOrderDetail["sales_order_id"] = result[0];
            const savedSalesOrderDetail = await salesOrderDetailRepository.insertSalesOrderDetail(salesOrderDetail);
            savedSalesOrderLines.push(savedSalesOrderDetail);
        }
        // salesOrder["sales_order_details"] = savedSalesOrderLines;
    }
    return result;
}

module.exports = {
    getAllSalesOrders,
    getSalesOrderById,
    insertSalesOrder,
    deleteSalesOrder,
    updateSalesOrder
}
