// Import required modules
const express = require("express");
const router = express.Router();
const customerService = require("../services/customerService");

/**
 * Handles GET request for the customers endpoint.
 * Returns a list of all the clients in the database.
 */
router.get("", async (req, res) => {
    try {
        const customers = await customerService.getAllCustomers();
        res.status(200).json(customers);
    } catch (e) {
        res.sendStatus(400);
        console.error(e);
    }
});

/**
 * Handles POST request for the customers endpoint.
 * Creates a new customer in the database.
 */
router.post("", async (req, res) => {
    const customer = req.body;
    try {
        const result = await customerService.insertCustomer(customer);
        res.status(201).json({ id: result[0] });
    } catch (e) {
        res.sendStatus(400);
        console.error(e);
    }
});

/**
 * Handles GET :id request for the customers endpoint.
 * Finds a customer by a given id.
 */
router.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const customer = await customerService.getCustomerById(id);
        res.status(200).json(customer);
    } catch (e) {
        res.sendStatus(400);
        console.error(e);
    }
});

/**
 * Handles UPDATE :id request for the customers endpoint.
 * Finds and updates a customer by a given id.
 */
router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const updatedCustomer = req.body;
    try {
        const updated = await customerService.updateCustomer(id, updatedCustomer);
        res.status(200).json(updated);
    } catch (e) {
        res.sendStatus(400);
        console.error(e);
    }
});

/**
 * Handles DELETE :id request for the customers endpoint.
 * Finds and deletes a customer by a given id if it exists.
 */
router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const result = await customerService.deleteCustomer(id);
        res.status(200).json(result);
    } catch (e) {
        res.sendStatus(400);
        console.error(e);
    }
});

module.exports = router;
