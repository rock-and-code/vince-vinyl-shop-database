// Import the 'knex' module for interacting with the database
const knex = require("./knex");

/**
 * Retrieves all customers from the database.
 * @returns {Promise} A promise that resolves to an array of all customers.
 */
const getAllCustomers = () => {
    return knex("Customer").select("*");
}

/**
 * Retrieves a specific customer by their ID.
 * @param {number} id - The ID of the customer to retrieve.
 * @returns {Promise} A promise that resolves to the retrieved customer.
 */
const getCustomerById = (id) => {
    return knex("Customer").select("*").where("id", id);
}

/**
 * Updates a customer with the provided data.
 * @param {number} id - The ID of the customer to update.
 * @param {object} customer - The updated customer data.
 * @returns {Promise} A promise that resolves when the update is complete.
 */
const updateCustomer = (id, customer) => {
    return knex("Customer").where("id", id).update(customer);
}

/**
 * Deletes a customer by their ID from the database.
 * @param {number} id - The ID of the customer to delete.
 * @returns {Promise} A promise that resolves when the deletion is complete.
 */
const deleteCustomer = (id) => {
     return knex("Customer").where("id", id).del();
}

/**
 * Inserts a new customer into the database.
 * @param {object} customer - The customer to insert.
 * @returns {Promise} A promise that resolves when the insertion is complete.
 */
const insertCustomer = (customer) => {
    return knex("Customer").insert(customer);
}

module.exports = {
    getAllCustomers,
    getCustomerById,
    insertCustomer,
    deleteCustomer,
    updateCustomer
}
