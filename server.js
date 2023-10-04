// Import required modules and libraries
const express = require("express");
const app = express();
const PORT = 8080;
const bodyParser = require("body-parser");

/**
 * Middlewares
 */

// Parse request bodies as JSON and URL-encoded data
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())


/**
 * Controllers
 */
const customerController = require("./controllers/customerController");
const salesOrderController = require("./controllers/salesOrderController");
const albumController = require("./controllers/albumController");
const invoiceController = require("./controllers/invoiceController");
const purchaseOrderController = require("./controllers/purchaseOrderController");

/**
 * RESTful API's Endpoints
 */

// Define endpoints for customer-related operations
app.use("/customers", customerController);

// Define endpoints for sales order-related operations
app.use("/salesOrders", salesOrderController);

// Define endpoints for album-related operations
app.use("/albums", albumController);

// Define endpoints for invoice-related operations
app.use("/invoices", invoiceController);

// Define endpoints for invoice-related operations
app.use("/purchaseOrders", purchaseOrderController);

// Start the server and listen on the specified port
app.listen(PORT, (req, res) => {
    console.log(`Listening on port ${PORT}`)
})