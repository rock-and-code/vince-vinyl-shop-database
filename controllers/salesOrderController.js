// Import required modules and services
const express = require("express");
const router = express.Router();
const salesOrderService = require("../services/salesOrderService");

/**
 * Handles GET request for the sales orders endpoint.
 * Returns a list of all the sales orders in the database.
 */
router.get("", async (req, res) => {
    try {
        const salesOrders = await salesOrderService.getAllSalesOrders();
        res.status(200).json(salesOrders);
    } catch (e) {
        res.sendStatus(400);
        console.error(e);
    }
});

/**
 * Handles POST request for the sales orders endpoint.
 * Creates a new sales order in the database.
 */
router.post("", async (req, res) => {
    const salesOrder = req.body;
    try {
        const result = await salesOrderService.insertSalesOrder(salesOrder);
        res.status(201).json({ id: result[0] });
    } catch (e) {
        res.sendStatus(400);
        console.error(e);
    }
});

/**
 * Handles GET :id request for the sales orders endpoint.
 * Finds a sales order by a given ID.
 */
router.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const salesOrder = await salesOrderService.getSalesOrderById(id);
        res.status(200).json(salesOrder);
    } catch (e) {
        res.sendStatus(400);
        console.error(e);
    }
});

/**
 * Handles UPDATE :id request for the sales orders endpoint.
 * Finds and updates a sales order by a given ID.
 */
router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const updatedSalesOrder = req.body;
    try {
        const updated = await salesOrderService.updateSalesOrder(id, updatedSalesOrder);
        res.status(200).json(updated);
    } catch (e) {
        res.sendStatus(400);
        console.error(e);
    }
});

/**
 * Handles DELETE :id request for the sales orders endpoint.
 * Finds and deletes a sales order by a given ID if it exists.
 */
router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const result = await salesOrderService.deleteSalesOrder(id);
        res.status(200).json(result);
    } catch (e) {
        res.sendStatus(400);
        console.error(e);
    }
});

module.exports = router;
