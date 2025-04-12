// controllers/reviewController.js
const mongoose = require('mongoose');
// const { comment_Rate } = require('../models/reviewModel');

// Create a review (unchanged)
const createReview = async (req, res) => {
  try {
    const { product, rating, comment } = req.body;
    const learner = req.user._id; // provided by the identifier middleware

    if (!product || !rating) {
      return res.status(400).json({ success: false, message: "Product and rating are required." });
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

// Edit a review (only by the owner)
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

// Delete a review
// - Admins can delete any review.
// - Learners can only delete their own reviews.
const deleteReview = async (req, res) => {
  try {
    const { reviewId } = req.params;
    const userId = req.user._id;
    const userRole = req.user.role; // assuming req.user.role exists

    const review = await comment_Rate.findById(reviewId);
    if (!review) {
      return res.status(404).json({ success: false, message: "Review not found." });
    }

    // If not admin, check that the review belongs to the requesting learner
    if (userRole !== 'Admin' && review.learner.toString() !== userId.toString()) {
      return res.status(403).json({ success: false, message: "Unauthorized to delete this review." });
    }

    await review.remove();
    return res.status(200).json({ success: true, message: "Review deleted successfully." });
  } catch (error) {
    console.error("Error deleting review:", error);
    return res.status(500).json({ success: false, message: "Server error." });
  }
};

// Get reviews for a product with pagination and average rating calculation
const getProductReviewsWithPagination = async (req, res) => {
  try {
    const { productId } = req.params;
    // Use query parameters for pagination: page and limit (optional)
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 10;
    const skip = (page - 1) * limit;

    // Fetch paginated reviews, populating learner details
    const reviews = await comment_Rate.find({ product: productId })
      .populate('learner', 'name')
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    // Count total reviews for the product
    const totalReviews = await comment_Rate.countDocuments({ product: productId });

    // Aggregate to get average rating
    const avgResult = await comment_Rate.aggregate([
      { $match: { product: mongoose.Types.ObjectId(productId) } },
      { $group: { _id: null, averageRating: { $avg: "$rating" } } }
    ]);
    const averageRating = (avgResult[0] && avgResult[0].averageRating) || 0;

    return res.status(200).json({
      success: true,
      data: reviews,
      totalReviews,
      currentPage: page,
      totalPages: Math.ceil(totalReviews / limit),
      averageRating
    });
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return res.status(500).json({ success: false, message: "Server error." });
  }
};


