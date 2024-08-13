const express = require('express');
const router = express.Router();
const { creatOrder } = require('../controllers/orderControllers');


router.route('/order').post(creatOrder);

module.exports = router;