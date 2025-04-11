const jwt = require('jsonwebtoken');

exports.identifier = async (req, res, next) => {
	let token;

	console.log('Getting entry in identifier middleware');

	// Check Authorization header
	if (
		req.headers.authorization &&
		req.headers.authorization.startsWith('Bearer')
	) {
		token = req.headers.authorization.split(' ')[1]; // already extracting pure token
	} else {
		// Fallback to cookie
		token = req.cookies['Authorization']; 
	}

	if (!token) {
		return res.status(401).json({ success: false, message: 'Unauthorized: No token provided' });
	}

	try {
		// No need to split again, token is ready
		const decoded = jwt.verify(token, process.env.JWT_SECRET);

		if (!decoded) throw new Error('Invalid token');

		req.user = decoded; // attach decoded user info to req
		next();
	} catch (error) {
		console.error('Auth middleware error:', error.message);
		return res.status(401).json({ success: false, message: 'Unauthorized: Invalid or expired token' });
	}
};
