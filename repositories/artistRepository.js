// Import the 'knex' module for interacting with the database
const knex = require("./knex");

/**
 * Retrieves all artists from the database.
 * @returns {Promise} A promise that resolves to an array of all artists.
 */
const getAllArtists = () => {
    return knex("Artist").select("*");
}

/**
 * Retrieves a specific artist by their ID.
 * @param {number} id - The ID of the artist to retrieve.
 * @returns {Promise} A promise that resolves to the retrieved artist.
 */
const getArtistById = (id) => {
    return knex("Artist").select("*").where("id", id);
}

/**
 * Updates an artist with the provided data.
 * @param {number} id - The ID of the artist to update.
 * @param {object} artist - The updated artist data.
 * @returns {Promise} A promise that resolves when the update is complete.
 */
const updateArtist = (id, artist) => {
    return knex("Artist").where("id", id).update(artist);
}

/**
 * Deletes an artist by their ID from the database.
 * @param {number} id - The ID of the artist to delete.
 * @returns {Promise} A promise that resolves when the deletion is complete.
 */
const deleteArtist = (id) => {
     return knex("Artist").where("id", id).del();
}

/**
 * Inserts a new artist into the database.
 * @param {object} artist - The artist to insert.
 * @returns {Promise} A promise that resolves when the insertion is complete.
 */
const insertArtist = (artist) => {
    return knex("Artist").insert(artist);
}

module.exports = {
    getAllArtists,
    getArtistById,
    insertArtist,
    deleteArtist,
    updateArtist
}
