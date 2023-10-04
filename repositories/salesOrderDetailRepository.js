// Import the 'knex' module for interacting with the database
const knex = require("./knex")

/**
 * Retrieves all sales order details by a given sales order ID.
 * @param {number} salesOrderId - The ID of the sales order.
 * @returns {Promise} A promise that resolves to the result of the database query.
 */
const getAllSalesOrderDetailsFormatedBySalesOrderId = async(salesOrderId) => {
    const result = await knex.raw("SELECT \n" +
	    "Album.title As [album], \n" +
	    "sod.qty As [qty], \n" +
	    "Price.price As [price] \n" +
    "FROM SalesOrderDetail sod \n" +
    "INNER JOIN SalesOrder ON sod.sales_order_id = SalesOrder.id \n" +
    "INNER JOIN Album ON sod.album_id = Album.id \n" +
    "INNER JOIN Price ON sod.album_id = Price.album_id \n" +
    "AND SalesOrder.date  BETWEEN Price.start_date AND Price.end_date \n" +
    "WHERE sod.sales_order_id = ?", salesOrderId);
    return result;
}

/**
 * Deletes all sales order details associated with a given sales order ID.
 * @param {number} salesOrderId - The ID of the sales order.
 * @returns {Promise} A promise that resolves when the deletion is complete.
 */
const getAllSalesOrderDetailsBySalesOrderId = (salesOrderId) => {
    return knex("SalesOrderDetail").select("*").where("sales_order_id", salesOrderId);
}


/**
 * Deletes all sales order details associated with a given sales order ID.
 * @param {number} salesOrderId - The ID of the sales order.
 * @returns {Promise} A promise that resolves when the deletion is complete.
 */
const deleteAllSalesOrderDetailsBySalesOrderId = (salesOrderId) => {
    return knex("SalesOrderDetail").where("sales_order_id", salesOrderId).del();
}

/**
 * Retrieves a specific sales order detail by its ID.
 * @param {number} id - The ID of the sales order detail to retrieve.
 * @returns {Promise} A promise that resolves to the retrieved sales order detail.
 */
const getSalesOrderDetailById = (id) => {
    return knex("SalesOrderDetail").select("*").where("id", id);
}

/**
 * Updates a sales order detail with the provided data.
 * @param {number} salesOrderId - The ID of the sales order detail to update.
 * @param {number} albumId - The ID of the album detail to update.
 * @param {object} salesOrderDetail - The updated sales order detail data.
 * @returns {Promise} A promise that resolves when the update is complete.
 */
const updateSalesOrderDetail = (salesOrderId, albumId, salesOrderDetail) => {
    return knex("SalesOrderDetail").where({sales_order_id: salesOrderId, album_id: albumId}).update(salesOrderDetail);
}

/**
 * Updates all sales order details with the provided data.
 *
 * @param {number} salesOrderId - The ID of the sales order detail to update.
 * @param {Array<object>} salesOrderDetails - An array containing the updated sales order details data.
 * @returns {Promise} A promise that resolves when the update is complete.
 */
const updateAllSalesOrderDetail = async (salesOrderId, salesOrderDetails) => {
    try {
        await knex.transaction(async trx => {
            // Delete all the sales order details associated with the given sales order
            await trx("SalesOrderDetail").where("sales_order_id", salesOrderId).del();

            // Insert the updated sales order details
            for (let salesOrderDetail of salesOrderDetails) {
                await trx("SalesOrderDetail").insert(salesOrderDetail);
            }
        })
    } catch (error) {
        throw new Error(error);
    }
}

/**
 * Deletes a specific sales order detail by its ID.
 * @param {number} id - The ID of the sales order detail to delete.
 * @returns {Promise} A promise that resolves when the deletion is complete.
 */
const deleteSalesOrderDetail = (id) => {
     return knex("SalesOrderDetail").where("id", id).del();
}

/**
 * Inserts a new sales order detail into the database.
 * @param {object} salesOrderDetail - The sales order detail to insert.
 * @returns {Promise} A promise that resolves when the insertion is complete.
 */
const insertSalesOrderDetail = (salesOrderDetail) => {
    return knex("SalesOrderDetail").insert(salesOrderDetail);
}

module.exports = {
    getAllSalesOrderDetailsBySalesOrderId,
    getAllSalesOrderDetailsFormatedBySalesOrderId,
    deleteAllSalesOrderDetailsBySalesOrderId,
    updateAllSalesOrderDetail,
    getSalesOrderDetailById,
    insertSalesOrderDetail,
    deleteSalesOrderDetail,
    updateSalesOrderDetail
}