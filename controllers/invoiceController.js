const express = require("express");
const router = express.Router();
const invoiceService = require("../services/invoiceService");

/**
 * Handles GET request for the invoices endpoint.
 * Returns a list of all the invoices in the database.
 *
 * @function
 * @name GET /invoices
 * @memberof router
 * @inner
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {void}
 */
router.get("", async (req, res) => {
    try {
        const invoices = await invoiceService.getAllInvoices();
        res.status(200).json(invoices);
    } catch (e) {
        res.sendStatus(400);
        console.error(e);
    }
});

/**
 * Handles POST request for the invoices endpoint.
 * Creates a new invoice in the database.
 *
 * @function
 * @name POST /invoices
 * @memberof router
 * @inner
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Object} req.body - The data of the new invoice.
 * @returns {void}
 */
router.post("", async (req, res) => {
    const invoice = req.body;
    try {
        const result = await invoiceService.insertInvoice(invoice);
        res.status(201).json({ id: result[0] });
    } catch (e) {
        res.sendStatus(400);
        console.error(e);
    }
});

/**
 * Handles GET :id request for the invoices endpoint.
 * Finds an invoice by a given ID.
 *
 * @function
 * @name GET /invoices/:id
 * @memberof router
 * @inner
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {string} req.params.id - The ID of the invoice to retrieve.
 * @returns {void}
 */
router.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const invoice = await invoiceService.getInvoiceById(id);
        res.status(200).json(invoice);
    } catch (e) {
        res.sendStatus(400);
        console.error(e);
    }
});

/**
 * Handles PUT :id request for the invoices endpoint.
 * Finds and updates an invoice by a given ID.
 *
 * @function
 * @name PUT /invoices/:id
 * @memberof router
 * @inner
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {string} req.params.id - The ID of the invoice to update.
 * @param {Object} req.body - The updated invoice data.
 * @returns {void}
 */
router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const updatedInvoice = req.body;
    try {
        const updated = await invoiceService.updateInvoice(id, updatedInvoice);
        res.status(200).json(updated);
    } catch (e) {
        res.sendStatus(400);
        console.error(e);
    }
});

/**
 * Handles DELETE :id request for the invoices endpoint.
 * Finds and deletes an invoice by a given ID if it exists.
 *
 * @function
 * @name DELETE /invoices/:id
 * @memberof router
 * @inner
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {string} req.params.id - The ID of the invoice to delete.
 * @returns {void}
 */
router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const result = await invoiceService.deleteInvoice(id);
        res.status(200).json(result);
    } catch (e) {
        res.sendStatus(400);
        console.error(e);
    }
});

module.exports = router;
