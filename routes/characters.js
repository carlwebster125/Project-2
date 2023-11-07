const router = require('express').Router();
const characterController = require('../controllers/character-controller');
const { checkAuth } = require('../middlewares/auth');


router.route('/characters').get(checkAuth, charaterController.getAll);


outer.route('/characters').get(checkAuth, charaterController.getAllByUserId);

router
    .route('/my-characters').get(characterController.getAllByUserId);

module.exports = router;