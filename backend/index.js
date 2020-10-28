const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const links = require('./app/links');

const app = express();
const PORT = 8000;

app.use(express.json());
app.use(cors());

const run = async () => {
    await mongoose.connect("mongodb://localhost/shortLinks", {useNewUrlParser: true, useUnifiedTopology: true});

    app.use("/links", links);

    console.log("Connected to MongoDB");

    app.listen(PORT, () => {
        console.log(`Server started at http://localhost:${PORT}`);
    });
};

run().catch(console.log);