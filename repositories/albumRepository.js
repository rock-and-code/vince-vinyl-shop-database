// Import the 'knex' module for interacting with the database
const knex = require("./knex");

/**
 * Retrieves all albums from the database.
 *
 * @returns {Promise<Array>} A promise that resolves to an array of all albums.
 */
const getAllAlbums = () => {
    return knex("Album").select("*");
}

/**
 * Retrieves a specific album by its ID.
 *
 * @param {number} id - The ID of the album to retrieve.
 * @returns {Promise<Object>} A promise that resolves to the retrieved album.
 */
const getAlbumById = (id) => {
    return knex("Album").select("*").where("id", id);
}

/**
 * Updates an album with the provided data.
 *
 * @param {number} id - The ID of the album to update.
 * @param {object} album - The updated album data.
 * @returns {Promise} A promise that resolves when the update is complete.
 */
const updateAlbum = (id, album) => {
    return knex("Album").where("id", id).update(album);
}

/**
 * Deletes an album by its ID from the database.
 *
 * @param {number} id - The ID of the album to delete.
 * @returns {Promise} A promise that resolves when the deletion is complete.
 */
const deleteAlbum = (id) => {
     return knex("Album").where("id", id).del();
}

/**
 * Inserts a new album into the database.
 *
 * @param {object} album - The album to insert.
 * @returns {Promise} A promise that resolves when the insertion is complete.
 */
const insertAlbum = (album) => {
    return knex("Album").insert(album);
}

module.exports = {
    getAllAlbums,
    getAlbumById,
    insertAlbum,
    deleteAlbum,
    updateAlbum
}
