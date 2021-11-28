const path = require('path');

const express = require('express');

const ticketsController = require('../controllers/tickets');

const errorController = require('../controllers/error');

const router = express.Router();

router.get('/', ticketsController.getIndex);

router.get('/:pageId', ticketsController.getIndex);


router.get('/tickets/:ticketId', ticketsController.getTicket);

router.get('/errorapi', errorController.getErrorAPI);

router.get('*', errorController.get404);

module.exports = router;
