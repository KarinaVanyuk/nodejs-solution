const express = require("express");
const router = express.Router();
const commentsController = require('../controllers/comments.js');

router.get("/:postId/comments", commentsController.getComments);
router.post("/:postId/comments", commentsController.addComment);

module.exports = router;
