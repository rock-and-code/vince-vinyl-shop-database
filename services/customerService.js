// Import required repositories and modules
const customerRepository = require("../repositories/customerRepository");

/**
 * Retrieves and returns an array containing all the customers in the database.
 *
 * @function
 * @returns {Promise<Array>} A promise that resolves to an Array containing all the customers in the database.
 */
const getAllCustomers = async () => {
    return await customerRepository.getAllCustomers();
}

/**
 * Retrieves and returns a customer by a given ID if it exists.
 *
 * @function
 * @param {number} id - The ID of the customer to retrieve.
 * @returns {Promise<Object|null>} A promise that resolves to the customer matching the given ID if it exists, or null if not found.
 */
const getCustomerById = async (id) => {
    return await customerRepository.getCustomerById(id);
}

/**
 * Updates the given customer in the database.
 *
 * @function
 * @param {number} id - The ID of the customer to update.
 * @param {Object} customer - The updated customer data.
 * @returns {Promise<Object>} A promise that resolves to the updated customer.
 */
const updateCustomer = async (id, customer) => {
    return await customerRepository.updateCustomer(id, customer);
}

/**
 * Deletes a customer from the database by a given ID if it exists.
 *
 * @function
 * @param {number} id - The ID of the customer to delete.
 * @returns {Promise<boolean>} A promise that resolves to true if the customer was deleted successfully, false otherwise.
 */
const deleteCustomer = async (id) => {
    return await customerRepository.deleteCustomer(id);
}

/**
 * Inserts a new customer into the database.
 *
 * @function
 * @param {Object} customer - The new customer to insert.
 * @returns {Promise<Object>} A promise that resolves to the new customer stored in the database.
 */
const insertCustomer = async (customer) => {
    return await customerRepository.insertCustomer(customer);
}

// Export the functions as an object for use in other modules
module.exports = {
    getAllCustomers,
    getCustomerById,
    insertCustomer,
    deleteCustomer,
    updateCustomer
}
