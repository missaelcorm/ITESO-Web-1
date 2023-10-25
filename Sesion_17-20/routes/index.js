const router = require('express').Router();

const authMiddleware = require('./../src/middlewares/auth');
const usersController = require('./../src/controllers/users');

router.use('/users', authMiddleware);

router.get('/users', usersController.list);
router.post('/users', usersController.create);
router.put('/users/:id', usersController.edit);
router.delete('/users/:id', usersController.delete);
router.get('/users/:id', usersController.show);

module.exports = router;
