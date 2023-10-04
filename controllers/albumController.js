// Import required modules
const express = require("express");
const router = express.Router();
const albumService = require("../services/albumService");

/**
 * Handles GET request for the albums endpoint.
 * Returns a list of all the albums in the database.
 *
 * @function
 * @name GET /albums
 * @memberof router
 * @inner
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {void}
 */
router.get("", async (req, res) => {
    try {
        const albums = await albumService.getAllAlbums();
        res.status(200).json(albums);
    } catch (e) {
        res.sendStatus(400);
        console.error(e);
    }
});

/**
 * Handles POST request for the albums endpoint.
 * Creates a new album in the database.
 *
 * @function
 * @name POST /albums
 * @memberof router
 * @inner
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {void}
 */
router.post("", async (req, res) => {
    const album = req.body;
    try {
        const result = await albumService.insertAlbum(album);
        res.status(201).json({ id: result[0] });
    } catch (e) {
        res.sendStatus(400);
        console.error(e);
    }
});

/**
 * Handles GET :id request for the albums endpoint.
 * Finds an album by a given ID.
 *
 * @function
 * @name GET /albums/:id
 * @memberof router
 * @inner
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {string} req.params.id - The ID of the album to retrieve.
 * @returns {void}
 */
router.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const album = await albumService.getAlbumById(id);
        res.status(200).json(album);
    } catch (e) {
        res.sendStatus(400);
        console.error(e);
    }
});

/**
 * Handles UPDATE :id request for the albums endpoint.
 * Finds and updates an album by a given ID.
 *
 * @function
 * @name PUT /albums/:id
 * @memberof router
 * @inner
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {string} req.params.id - The ID of the album to update.
 * @param {Object} req.body - The updated album data.
 * @returns {void}
 */
router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const updatedAlbum = req.body;
    try {
        const updated = await albumService.updateAlbum(id, updatedAlbum);
        res.status(200).json(updated);
    } catch (e) {
        res.sendStatus(400);
        console.error(e);
    }
});

/**
 * Handles DELETE :id request for the albums endpoint.
 * Finds and deletes an album by a given ID if it exists.
 *
 * @function
 * @name DELETE /albums/:id
 * @memberof router
 * @inner
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {string} req.params.id - The ID of the album to delete.
 * @returns {void}
 */
router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const result = await albumService.deleteAlbum(id);
        res.status(200).json(result);
    } catch (e) {
        res.sendStatus(400);
        console.error(e);
    }
});

module.exports = router;
