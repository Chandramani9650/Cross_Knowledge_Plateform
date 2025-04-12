const BASE_URL = "http://localhost:8000/api";

export const API_ROUTES = {
  // Auth Routes
  SIGNUP: `${BASE_URL}/auth/signup`,
  SIGNIN: `${BASE_URL}/auth/signin`,
  SIGNOUT: `${BASE_URL}/auth/signout`,

  // Chat Routes
  CHAT_START: `${BASE_URL}/chat/start`,
  CHAT_MESSAGES: (conversationId) => `${BASE_URL}/chat/${conversationId}/messages`,
  CHAT_SEND: (conversationId) => `${BASE_URL}/chat/${conversationId}/send`,
  CHAT_DELETE_MESSAGE: (messageId) => `${BASE_URL}/chat/${messageId}`,
  CHAT_EDIT_MESSAGE: (messageId) => `${BASE_URL}/chat/${messageId}`,
  CHAT_MARK_SEEN: (conversationId) => `${BASE_URL}/chat/seen/${conversationId}`,

  // Discussion Routes
  CREATE_DISCUSSION: `${BASE_URL}/discussions/create`,
  GET_DISCUSSIONS_BY_MODULE: (moduleId) => `${BASE_URL}/discussions/module/${moduleId}`,
  ADD_REPLY_TO_DISCUSSION: (discussionId) => `${BASE_URL}/discussions/reply/${discussionId}`,

  // Mentorship / Learning Post Routes
  CREATE_LEARNING_POST: `${BASE_URL}/mentership/create`, // Assuming POST route
  GET_ALL_LEARNING_POSTS: `${BASE_URL}/mentership/all`,  // If exists

  // Upload (if different)
  UPLOAD_FILES: `${BASE_URL}/uploads`, // Assuming for image/video upload

  // Marketplace
  CREATE_MARKETPLACE_ITEM: `${BASE_URL}/marketplace/create`,
  GET_MARKETPLACE_ITEMS: `${BASE_URL}/marketplace/items`,

  // Reviews
  CREATE_REVIEW: `${BASE_URL}/product/review`,
  GET_REVIEWS: (productId) => `${BASE_URL}/product/reviews/${productId}`,
  EDIT_REVIEW: (reviewId) => `${BASE_URL}/product/review/${reviewId}`,
  DELETE_REVIEW: (reviewId) => `${BASE_URL}/product/review/${reviewId}`,
};
