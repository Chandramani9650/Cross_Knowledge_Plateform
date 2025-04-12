const { comment_Rate } = require('../models/revieworCommentModel');
const {LearningModel} = require('../models/learningModel')

// CREATE a review
const createReview = async (req, res) => {
  try {
    const { product, rating, comment } = req.body;
    const learner = req.user.userId; // assuming identifier middleware

    if (!product || !rating) {
      return res.status(400).json({ success: false, message: "Product and rating are required." });
    }

    const productExists = await LearningModel.findById(product);
    if (!productExists) {
      return res.status(404).json({
        success: false,
        message: "Product not found. Cannot submit review.",
      });
    }

    const alreadyReviewed = await comment_Rate.findOne({ product, learner });
    if (alreadyReviewed) {
      return res.status(400).json({
        success: false,
        message: "You have already reviewed this product.",
      });
    }

    const newReview = new comment_Rate({
      product,
      learner,
      rating,
      comment
    });

    await newReview.save();
    return res.status(201).json({ success: true, message: "Review submitted!", data: newReview });
  } catch (error) {
    console.error('Error submitting review:', error);
    return res.status(500).json({ success: false, message: "Server error." });
  }
};

// GET reviews by product
const getProductReviews = async (req, res) => {
  try {
    const { productId } = req.params;

    const reviews = await comment_Rate.find({ product: productId }).populate('learner', 'name');
    return res.status(200).json({ success: true, data: reviews });
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return res.status(500).json({ success: false, message: "Server error." });
  }
};

//edit review
const editReview = async (req, res) => {
    try {
      const { reviewId } = req.params;
      const { rating, comment } = req.body;
      const learnerId = req.user._id;
  
      const review = await comment_Rate.findById(reviewId);
  
      if (!review) {
        return res.status(404).json({ success: false, message: "Review not found." });
      }
  
      if (review.learner.toString() !== learnerId.toString()) {
        return res.status(403).json({ success: false, message: "Unauthorized to edit this review." });
      }
  
      if (rating) review.rating = rating;
      if (comment) review.comment = comment;
  
      await review.save();
  
      return res.status(200).json({ success: true, message: "Review updated!", data: review });
    } catch (error) {
      console.error("Error editing review:", error);
      return res.status(500).json({ success: false, message: "Server error." });
    }
  };
  
// delete review

const deleteReview = async (req, res) => {
    try {
      const { reviewId } = req.params;
      const learnerId = req.user._id;
  
      const review = await comment_Rate.findById(reviewId);
  
      if (!review) {
        return res.status(404).json({ success: false, message: "Review not found." });
      }
  
      if (review.learner.toString() !== learnerId.toString()) {
        return res.status(403).json({ success: false, message: "Unauthorized to delete this review." });
      }
  
      await review.remove();
  
      return res.status(200).json({ success: true, message: "Review deleted successfully." });
    } catch (error) {
      console.error("Error deleting review:", error);
      return res.status(500).json({ success: false, message: "Server error." });
    }
  };
  

module.exports = {
  createReview,
  getProductReviews,
  editReview,
  deleteReview

};
