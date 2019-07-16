const path = require('path');
const fs = require('fs');
const uuid = require('uuid');
const commentsFile = path.join(__dirname, '../data/comments.json');
const commentsData = JSON.parse(fs.readFileSync(commentsFile, 'utf8'));

const getComments = function (req, res) {
    const postId = req.params.postId;
    const comments = commentsData.filter(comment => comment.postId === postId);

   comments.length ? res.json(comments) : res.status(200).send('Invalid status value')
};

module.exports = {
    getComments
};