const path = require('path');
const fs = require('fs');
const uuid = require('uuid');
const moment = require('moment');
const postsFile = path.join(__dirname, '../data/posts.json');
const postsData = JSON.parse(fs.readFileSync(postsFile, 'utf8'));

const getPosts = function (req, res) {
    res.json(postsData)
};

const addPost = function(req, res) {
    const newPost = req.body;

    if(!newPost.userId || !newPost.title || !newPost.text) {
        res.status(400).send('Invalid status value')
    }

    newPost.postId = uuid();
    newPost.createAt = moment().format('YYYY-MM-D');
    postsData.push(newPost)
    fs.writeFileSync(postsFile, JSON.stringify(postsData));

    res.status(200).send(newPost)
}

const deletePost = function (req, res) {
    const id = req.params.id;
    const index = postsData.findIndex(post => post.postId === id)

    if (index === -1)  res.status(400).send('Not found');
     else {
      postsData.splice(index, 1);
      fs.writeFileSync(postsFile, JSON.stringify(postsData));

      res.status(200).send('Post was deleted');
    }
  };

  const updatePost = function (req, res) {
    const updatedPost = req.body;
    const id = req.params.id;

    if (!updatedPost.text || !updatedPost.title) res.status(400).send('Bad request');
    
    const index = postsData.findIndex(post => post.postId === id)

    if (index === -1)  res.status(400).send('Not found');
    else {
        updatedPost.postId = id;
        updatedPost.userId = postsData[index].userId
        updatedPost.createAt = moment().format('YYYY-MM-D');
        postsData[index] = updatedPost;
        fs.writeFileSync(postsFile, JSON.stringify(postsData));

        res.status(200).send('Post was updated');
     }   
  };

 const getPostById = function(req, res) {
    const id = req.params.id;
    const post = postsData.find(post => post.postId === id);

    post ? res.json(post) : res.status(400).send('Not found');
 }
 
 const getStatistics = function(req, res) {
     res.send(global.statistics)
 }

module.exports = {
    getPosts,
    addPost,
    deletePost,
    updatePost,
    getPostById,
    getStatistics
};