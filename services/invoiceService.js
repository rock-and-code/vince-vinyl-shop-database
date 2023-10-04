// Import required repositories and modules
const invoiceRepository = require("../repositories/invoiceRepository");
const invoiceDetailRepository = require("../repositories/invoiceDetailRepository");

/**
 * Retrieves and returns an array containing all the invoices in the database.
 *
 * @function
 * @returns {Promise<Array>} A promise that resolves to an Array containing all the invoices in the database.
 */
const getAllInvoices = async () => {
    // Retrieve all invoices from the database
    let invoices = await invoiceRepository.getAllInvoices();
    // For each invoice, retrieve its associated invoice details
    for (let invoice of invoices) {
        invoice["invoice_details"] = await invoiceDetailRepository.getAllInvoiceDetailsByInvoiceId(invoice.id);
    }
    return invoices;
}

/**
 * Retrieves and returns an invoice by a given ID if it exists.
 *
 * @function
 * @param {number} id - The ID of the invoice to retrieve.
 * @returns {Promise<Object|null>} A promise that resolves to the invoice matching the given ID if it exists, or null if not found.
 */
const getInvoiceById = async (id) => {
    let result = await invoiceRepository.getInvoiceById(id);
    let invoice = result[0];
    // Retrieve all the invoice details associated with the invoice of the given ID
    invoice["invoice_details"] = await invoiceDetailRepository.getAllInvoiceDetailsByInvoiceId(invoice.id);

    return invoice;
}

/**
 * Updates the given invoice in the database.
 *
 * @function
 * @param {number} id - The ID of the invoice to update.
 * @param {Object} invoice - The updated invoice data.
 * @returns {Promise<Object>} A promise that resolves to the updated invoice.
 */
const updateInvoice = async (id, invoice) => {
    try {
        if ("invoice_details" in invoice) {

            await invoiceDetailRepository.updateAllInvoiceDetail(id, invoice["invoice_details"]);

            delete invoice["invoice_details"];
        }

        return await invoiceRepository.updateInvoice(id, invoice);
    } catch (error) {
        throw new Error(error);
    }
}

/**
 * Deletes an invoice from the database that matches the given ID.
 *
 * @function
 * @param {number} id - The ID of the invoice to delete.
 * @returns {Promise<Object|null>} A promise that resolves to the deleted invoice if found, or null if not found.
 */
const deleteInvoice = async (id) => {
    // Delete all the invoice details associated with the given invoice ID
    await invoiceDetailRepository.deleteAllInvoiceDetailsByInvoiceId(id);
    // Delete the invoice from the database
    return invoiceRepository.deleteInvoice(id);
}

/**
 * Inserts a new invoice into the database.
 *
 * @function
 * @param {Object} invoice - The new invoice to insert.
 * @returns {Promise<Object>} A promise that resolves to the new invoice stored in the database.
 */
const insertInvoice = async (invoice) => {
    const invoiceDetails = invoice["invoice_details"];
    // Remove invoice details from the invoice to avoid SQLite error when saving the order in the database
    // Since the invoice schema does not include an invoice_line column
    delete invoice["invoice_details"];
    // Insert the new invoice into the database
    const result = await invoiceRepository.insertInvoice(invoice);
    // If there are invoice details, insert and associate them with the invoice
    if (invoiceDetails.length > 0) {
        let savedInvoiceLines = [];
        for (let invoiceDetail of invoiceDetails) {
            invoiceDetail["sales_order_id"] = result[0];
            const savedInvoiceDetail = await invoiceDetailRepository.insertInvoiceDetail(invoiceDetail);
            savedInvoiceLines.push(savedInvoiceDetail);
        }
        // Invoice["invoice_details"] = savedInvoiceLines;
    }
    return result;
}

module.exports = {
    getAllInvoices,
    getInvoiceById,
    insertInvoice,
    deleteInvoice,
    updateInvoice
}
