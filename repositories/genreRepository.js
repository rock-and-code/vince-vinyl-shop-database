// Import the 'knex' module for interacting with the database
const knex = require("./knex");

/**
 * Retrieves all genres from the database.
 * @returns {Promise} A promise that resolves to an array of all genres.
 */
const getAllGenres = () => {
    return knex("Genre").select("*");
}

/**
 * Retrieves a specific genre by its ID.
 * @param {number} id - The ID of the genre to retrieve.
 * @returns {Promise} A promise that resolves to the retrieved genre.
 */
const getGenreById = (id) => {
    return knex("Genre").select("*").where("id", id);
}

/**
 * Updates a genre with the provided data.
 * @param {number} id - The ID of the genre to update.
 * @param {object} genre - The updated genre data.
 * @returns {Promise} A promise that resolves when the update is complete.
 */
const updateGenre = (id, genre) => {
    return knex("Genre").where("id", id).update(genre);
}

/**
 * Deletes a genre by its ID from the database.
 * @param {number} id - The ID of the genre to delete.
 * @returns {Promise} A promise that resolves when the deletion is complete.
 */
const deleteGenre = (id) => {
     return knex("Genre").where("id", id).del();
}

/**
 * Inserts a new genre into the database.
 * @param {object} genre - The genre to insert.
 * @returns {Promise} A promise that resolves when the insertion is complete.
 */
const insertGenre = (genre) => {
    return knex("Genre").insert(genre);
}

module.exports = {
    getAllGenres,
    getGenreById,
    insertGenre,
    deleteGenre,
    updateGenre
}
