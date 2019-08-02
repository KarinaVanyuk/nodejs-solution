const express = require("express");
const port = 3000;
const swagger = require("./routes/swagger.js");

const router = express.Router().use("/", swagger);

const app = express()
.use("/docs", swagger)

app.listen(port, (err) => {
  if (err) {
      return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})