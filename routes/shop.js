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

/*router.get('/cart', shopController.getCart);

router.post('/cart', shopController.postCart);

router.post('/cart-delete-item', shopController.postCartDeleteProduct);

router.post('/create-order', shopController.postOrder);

router.get('/orders', shopController.getOrders);*/

module.exports = router;
