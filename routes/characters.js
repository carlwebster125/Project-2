const router = require('express').Router();
const characterController = require('../controllers/character-controller');

router
    .route('/characters')
    .get(characterController.getAll)

router
    .route('/my-characters').get(characterController.getAllByUserId);

module.exports = router;