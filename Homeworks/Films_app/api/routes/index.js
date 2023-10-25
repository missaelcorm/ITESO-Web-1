const router = require('express').Router();

const authMiddleware = require('./../src/middlewares/auth');
const filmsController = require('./../src/controllers/films');

router.use('/films', authMiddleware);

router.get('/films', filmsController.list);
router.post('/films', filmsController.create);

module.exports = router;