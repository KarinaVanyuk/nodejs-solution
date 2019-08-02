const express = require("express");
const router = express.Router();
const postsController = require('../controllers/posts.js');

router.get("/", postsController.getPosts);
router.post('/', postsController.addPost)
router.delete('/:id', postsController.deletePost)
router.put("/:id", postsController.updatePost)
router.get("/:id", postsController.getPostById)

module.exports = router;