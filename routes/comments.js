const express = require("express");
const router = express.Router();
const commentsController = require('../controllers/comments.js');

router.get("/:postId/comments", commentsController.getComments);

module.exports = router;
