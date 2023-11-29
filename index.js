const express = require("express")
const cors = require("cors")
const swaggerUI = require('swagger-ui-express');

require('dotenv').config();

const app = express()
const PORT = process.env.PORT || 3000;

// DB connections:
require("./configs/database")

// Parse the incoming body from JSON => OBJECT so we can use it in JS
app.use(express.json())

// Allow cross origin requests (such as requests from HTML pages)
app.use(cors())

// ROUTES - user:
const StudentRouter = require("./Routers/StudentRouter")
app.use("/api/Students", StudentRouter)

//ROUTES - swagger:
const swaggerDocument = require('./openapi.json');
app.use('/api/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));// localhost:8000/api/api-docs

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
