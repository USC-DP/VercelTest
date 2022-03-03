const express = require('express');
const product = require("./api/product");
const PORT = process.env.PORT || 8080;


const app = express();

app.use(express.json({extended: false}));

app.use("/api/product", product);

app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));