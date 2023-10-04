// Import required repositories and modules
const albumRepository = require("../repositories/albumRepository");

/**
 * Retrieve all albums from the repository.
 *
 * @returns {Promise<Array>} An array of album objects.
 */
const getAllAlbums = async () => {
    // Call the getAllAlbums method from the repository and return its result
    return await albumRepository.getAllAlbums();
}

/**
 * Get an album by its ID from the repository.
 *
 * @param {number} id - The ID of the album to retrieve.
 * @returns {Promise<Object|null>} The album object if found, or null if not found.
 */
const getAlbumById = async (id) => {
    // Call the getAlbumById method from the repository with the provided ID and return its result
    return await albumRepository.getAlbumById(id);
}

/**
 * Update an album in the repository.
 *
 * @param {number} id - The ID of the album to update.
 * @param {Object} album - The updated album object.
 * @returns {Promise<Object|null>} The updated album object if successful, or null if not found.
 */
const updateAlbum = async (id, album) => {
    // Call the updateAlbum method from the repository with the provided ID and album object and return its result
    return await albumRepository.updateAlbum(id, album);
}

/**
 * Delete an album by its ID from the repository.
 *
 * @param {number} id - The ID of the album to delete.
 * @returns {Promise<boolean>} True if the album was deleted successfully, false otherwise.
 */
const deleteAlbum = async (id) => {
    // Call the deleteAlbum method from the repository with the provided ID and return its result
    return await albumRepository.deleteAlbum(id);
}

/**
 * Insert a new album into the repository.
 *
 * @param {Object} album - The album object to insert.
 * @returns {Promise<Object>} The inserted album object.
 */
const insertAlbum = async (album) => {
    // Call the insertAlbum method from the repository with the provided album object and return its result
    return await albumRepository.insertAlbum(album);
}

// Export the functions as an object for use in other modules
module.exports = {
    getAllAlbums,
    getAlbumById,
    insertAlbum,
    deleteAlbum,
    updateAlbum
}
