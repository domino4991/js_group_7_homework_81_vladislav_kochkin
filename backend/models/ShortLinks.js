const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ShortLinks = new Schema({
    originalUrl: {
        type: String,
        required: true
    },
    shortUrl: {
        type: String
    }
});

const Link = mongoose.model("Link", ShortLinks);

module.exports = Link;