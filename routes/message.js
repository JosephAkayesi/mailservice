const express = require('express');
const router = express();
const Message = require('../models/Message');

//Send message route
router.post('/send', (req, res) => {
    const newMessage = new Message({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message,
    });

    newMessage.save()
        .then(message => res.json(message))
        .catch(err => res.json(err))
});

module.exports = router;
