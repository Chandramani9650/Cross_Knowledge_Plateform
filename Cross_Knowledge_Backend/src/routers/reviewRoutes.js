const express = require('express');
const router = express.Router();
const { identifier } = require('../middlewares/identification');
const { createReview, getProductReviews , editReview, deleteReview} = require('../controllers/reviewController');

// Route to submit a review
router.post('/review', identifier, createReview);

// Route to get all reviews for a product
router.get('/reviews/:productId', getProductReviews);
router.put('/review/:reviewId', identifier, editReview);
router.delete('/review/:reviewId', identifier, deleteReview);


module.exports = router;
