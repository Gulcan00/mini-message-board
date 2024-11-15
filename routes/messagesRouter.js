const { Router } = require('express');
const messageRouter = Router();
const messagesController = require('../controllers/messagesController');

messageRouter.get('/', messagesController.getMessages);

messageRouter.get('/new', messagesController.createMessageGet);

messageRouter.post('/new', messagesController.createMessagePost);

messageRouter.get('/:id', messagesController.getMessage);

module.exports = messageRouter;
