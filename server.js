const express = require("express");
const bodyParser = require('body-parser');
const port = 3000;
const swagger = require("./routes/swagger.js");
const posts = require("./routes/posts.js");
const users = require("./routes/users.js");
const comments = require("./routes/comments.js");

const app = express()
app.use(bodyParser.json());

app.use("/docs", swagger)
   .use('/posts', posts)
   .use('/user', users)
   .use('/post', comments)

app.listen(port, (err) => {
  if (err) {
      return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})