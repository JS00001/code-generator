const express = require('express');
const router = express.Router();

/*
 *  Example using a GET request 
 */
router.route('/').get((req, res, next) => {
    res.json({ example: 'Project' })
});

module.exports = router;
