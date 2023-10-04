const express = require("express");
const router = express.Router();
const purchaseOrderService = require("../services/purchaseOrderService");

/**
 * Handles GET request for the purchaseOrders endpoint.
 * Returns a list of all the purchaseOrders in the database.
 *
 * @function
 * @name GET /purchaseOrders
 * @memberof router
 * @inner
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {void}
 */
router.get("", async (req, res) => {
    try {
        const purchaseOrders = await purchaseOrderService.getAllPurchaseOrders();
        res.status(200).json(purchaseOrders);
    } catch (e) {
        res.sendStatus(400);
        console.error(e);
    }
});

/**
 * Handles POST request for the purchaseOrders endpoint.
 * Creates a new purchaseOrder in the database.
 *
 * @function
 * @name POST /purchaseOrders
 * @memberof router
 * @inner
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Object} req.body - The data of the new purchaseOrder.
 * @returns {void}
 */
router.post("", async (req, res) => {
    const purchaseOrder = req.body;
    try {
        const result = await purchaseOrderService.insertPurchaseOrder(purchaseOrder);
        res.status(201).json({ id: result[0] });
    } catch (e) {
        res.sendStatus(400);
        console.error(e);
    }
});

/**
 * Handles GET :id request for the purchaseOrders endpoint.
 * Finds an purchaseOrder by a given ID.
 *
 * @function
 * @name GET /purchaseOrders/:id
 * @memberof router
 * @inner
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {string} req.params.id - The ID of the purchaseOrder to retrieve.
 * @returns {void}
 */
router.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const purchaseOrder = await purchaseOrderService.getPurchaseOrderById(id);
        res.status(200).json(purchaseOrder);
    } catch (e) {
        res.sendStatus(400);
        console.error(e);
    }
});

/**
 * Handles PUT :id request for the purchaseOrders endpoint.
 * Finds and updates an purchaseOrder by a given ID.
 *
 * @function
 * @name PUT /purchaseOrders/:id
 * @memberof router
 * @inner
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {string} req.params.id - The ID of the purchaseOrder to update.
 * @param {Object} req.body - The updated purchaseOrder data.
 * @returns {void}
 */
router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const updatedpurchaseOrder = req.body;
    try {
        const updated = await purchaseOrderService.updatePurchaseOrder(id, updatedpurchaseOrder);
        res.status(200).json(updated);
    } catch (e) {
        res.sendStatus(400);
        console.error(e);
    }
});

/**
 * Handles DELETE :id request for the purchaseOrders endpoint.
 * Finds and deletes an purchaseOrder by a given ID if it exists.
 *
 * @function
 * @name DELETE /purchaseOrders/:id
 * @memberof router
 * @inner
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {string} req.params.id - The ID of the purchaseOrder to delete.
 * @returns {void}
 */
router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const result = await purchaseOrderService.deletePurchaseOrder(id);
        res.status(200).json(result);
    } catch (e) {
        res.sendStatus(400);
        console.error(e);
    }
});

module.exports = router;
