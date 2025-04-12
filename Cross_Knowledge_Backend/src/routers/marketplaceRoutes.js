// routers/marketplaceRoutes.js
const express = require('express');
const { upload } = require('../component/uploadfile');
const { createMarketplaceItem, getAllMarketplaceItems } = require('../controllers/marketplaceControllers');
const { identifier } = require('../middlewares/identification');

const router = express.Router();

router.post('/create', identifier, upload.array('images', 5), createMarketplaceItem);
router.get('/items', getAllMarketplaceItems);

module.exports = router;
