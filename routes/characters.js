const router = require('express').Router();
const characterController = require('../controllers/character-controller');

router
    .route('/characters')
    .get(characterController.getAll)

module.exports = router;