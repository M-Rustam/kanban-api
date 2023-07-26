const express = require('express')
const routes = require("./routes");
const bodyParser = require("./bodyParser");

const app = express()
const PORT = 3000

bodyParser(app)
routes(app);

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})