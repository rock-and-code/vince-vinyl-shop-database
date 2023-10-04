// Import the 'knex' module for interacting with the database
const knex = require("./knex");

/**
 * Retrieves all invoices from the database.
 * @returns {Promise} A promise that resolves to an array of all invoices.
 */
const getAllInvoices = () => {
    return knex("Invoice").select("*");
}

/**
 * Retrieves a specific invoice by its ID.
 * @param {number} id - The ID of the invoice to retrieve.
 * @returns {Promise} A promise that resolves to the retrieved invoice.
 */
const getInvoiceById = (id) => {
    return knex("Invoice").select("*").where("id", id);
}

/**
 * Updates an invoice with the provided data.
 * @param {number} id - The ID of the invoice to update.
 * @param {object} invoice - The updated invoice data.
 * @returns {Promise} A promise that resolves when the update is complete.
 */
const updateInvoice = (id, invoice) => {
    return knex("Invoice").where("id", id).update(invoice);
}

/**
 * Deletes an invoice by its ID from the database.
 * @param {number} id - The ID of the invoice to delete.
 * @returns {Promise} A promise that resolves when the deletion is complete.
 */
const deleteInvoice = (id) => {
     return knex("Invoice").where("id", id).del();
}

/**
 * Inserts a new invoice into the database.
 * @param {object} invoice - The invoice to insert.
 * @returns {Promise} A promise that resolves when the insertion is complete.
 */
const insertInvoice = (invoice) => {
    return knex("Invoice").insert(invoice);
}

module.exports = {
    getAllInvoices,
    getInvoiceById,
    insertInvoice,
    deleteInvoice,
    updateInvoice
}
