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

const addComment = function(req, res) {
    const postId = req.params.postId;
    const newComment = req.body; 
    if (!newComment.text || !newComment.userId) res.status(200).send('Invalid status value')

    newComment.postId = postId;
    newComment.commentId = uuid();

    commentsData.push(newComment)
    fs.writeFileSync(commentsFile, JSON.stringify(commentsData));

    res.status(200).send(newComment)
}

module.exports = {
    getComments,
    addComment
};