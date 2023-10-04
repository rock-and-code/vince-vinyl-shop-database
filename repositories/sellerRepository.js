// Import the 'knex' module for interacting with the database
const knex = require("./knex");

/**
 * Retrieves all sellers from the database.
 * @returns {Promise} A promise that resolves to an array of all sellers.
 */
const getAllSellers = () => {
    return knex("Seller").select("*");
}

/**
 * Retrieves a specific seller by its ID.
 * @param {number} id - The ID of the seller to retrieve.
 * @returns {Promise} A promise that resolves to the retrieved seller.
 */
const getSellerById = (id) => {
    return knex("Seller").select("*").where("id", id);
}

/**
 * Updates a seller with the provided data.
 * @param {number} id - The ID of the seller to update.
 * @param {object} seller - The updated seller data.
 * @returns {Promise} A promise that resolves when the update is complete.
 */
const updateSeller = (id, seller) => {
    return knex("Seller").where("id", id).update(seller);
}

/**
 * Deletes a seller by its ID from the database.
 * @param {number} id - The ID of the seller to delete.
 * @returns {Promise} A promise that resolves when the deletion is complete.
 */
const deleteSeller = (id) => {
     return knex("Seller").where("id", id).del();
}

/**
 * Inserts a new seller into the database.
 * @param {object} seller - The seller to insert.
 * @returns {Promise} A promise that resolves when the insertion is complete.
 */
const insertSeller = (seller) => {
    return knex("Seller").insert(seller);
}

module.exports = {
    getAllSellers,
    getSellerById,
    insertSeller,
    deleteSeller,
    updateSeller
}
