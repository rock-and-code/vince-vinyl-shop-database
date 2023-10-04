// Import the 'knex' module for interacting with the database
const knex = require("./knex");

/**
 * Deletes all invoice details associated with a given invoice ID.
 * @param {number} invoiceId - The ID of the invoice.
 * @returns {Promise} A promise that resolves when the deletion is complete.
 */
const getAllInvoiceDetailsByInvoiceId = (invoiceId) => {
    return knex("InvoiceDetail").select("*").where("invoice_id", invoiceId);
}


/**
 * Deletes all invoice details associated with a given invoice ID.
 * @param {number} invoiceId - The ID of the invoice.
 * @returns {Promise} A promise that resolves when the deletion is complete.
 */
const deleteAllInvoiceDetailsByInvoiceId = (invoiceId) => {
    return knex("InvoiceDetail").where("invoice_id", invoiceId).del();
}

/**
 * Retrieves a specific invoice detail by its ID.
 * @param {number} id - The ID of the invoice detail to retrieve.
 * @returns {Promise} A promise that resolves to the retrieved invoice detail.
 */
const getInvoiceDetailById = (id) => {
    return knex("InvoiceDetail").select("*").where("id", id);
}

/**
 * Updates a invoice detail with the provided data.
 * @param {number} invoiceId - The ID of the invoice detail to update.
 * @param {number} albumId - The ID of the album detail to update.
 * @param {object} invoiceDetail - The updated invoice detail data.
 * @returns {Promise} A promise that resolves when the update is complete.
 */
const updateInvoiceDetail = (invoiceId, albumId, invoiceDetail) => {
    return knex("invoiceDetail").where({invoice_id: invoiceId, album_id: albumId}).update(invoiceDetail);
}

/**
 * Updates all invoice details with the provided data.
 *
 * @param {number} invoiceId - The ID of the invoice detail to update.
 * @param {Array<object>} invoiceDetails - An array containing the updated invoice details data.
 * @returns {Promise} A promise that resolves when the update is complete.
 */
const updateAllInvoiceDetail = async (invoiceId, invoiceDetails) => {
    try {
        await knex.transaction(async trx => {
            // Delete all the invoice details associated with the given invoice
            await trx("InvoiceDetail").where("invoice_id", invoiceId).del();

            // Insert the updated invoice details
            for (let InvoiceDetail of invoiceDetails) {
                await trx("InvoiceDetail").insert(InvoiceDetail);
            }
        })
    } catch (error) {
        throw new Error(error);
    }
}

/**
 * Deletes an invoice detail by its ID from the database.
 * @param {number} id - The ID of the invoice detail to delete.
 * @returns {Promise} A promise that resolves when the deletion is complete.
 */
const deleteInvoiceDetail = (id) => {
     return knex("InvoiceDetail").where("id", id).del();
}

/**
 * Inserts a new invoice detail into the database.
 * @param {object} invoiceDetail - The invoice detail to insert.
 * @returns {Promise} A promise that resolves when the insertion is complete.
 */
const insertInvoiceDetail = (invoiceDetail) => {
    return knex("InvoiceDetail").insert(invoiceDetail);
}

module.exports = {
    getAllInvoiceDetailsByInvoiceId,
    deleteAllInvoiceDetailsByInvoiceId,
    updateAllInvoiceDetail,
    getInvoiceDetailById,
    insertInvoiceDetail,
    deleteInvoiceDetail,
    updateInvoiceDetail
}
