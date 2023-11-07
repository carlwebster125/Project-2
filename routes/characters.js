const router = require('express').Router();
const characterController = require('../controllers/character-controller');
const { checkAuth } = require('../middlewares/auth');


router.route('/characters').get(checkAuth, characterController.getAll);


router.route('/characters').get(checkAuth, characterController.getAllByUserId);

router
    .route('/my-characters').get(characterController.getAllByUserId);

module.exports = router;