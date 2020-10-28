const express = require('express');
const {nanoid} = require('nanoid');
const Link = require('../models/ShortLinks');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const links = await Link.find();
        res.send(links);
    } catch (e) {
        res.status(500).send(e);
    }
});

router.get('/:shortUrl', async (req, res) => {
    const link = await Link.findOne({shortUrl: req.params.shortUrl});
    if(link.length !== 0) {
        res.status(301).redirect(link.originalUrl);
    } else {
        res.status(404).send({error: "404 not found"});
    }
});

router.post('/', async (req, res) => {
    const linkData = req.body;
    const link = new Link(linkData);
    const links = await Link.find();
    link.shortUrl = nanoid(6);
    const uniqueShortUrl = links.filter(item => item.shortUrl === link.shortUrl);
    if(uniqueShortUrl.length === 0) {
        try {
            await link.save();
            res.send(link);
        } catch (e) {
            res.status(400).send(e);
        }
    } else {
        res.status(400).send({error: "The short link is not unique, please try sending your request again"});
    }
});

module.exports = router;