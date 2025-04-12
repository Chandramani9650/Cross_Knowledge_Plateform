const authorizeMentor = (req, res, next) => {
  console.log(req.user);
  
    if (req.user?.role !== 'mentor') {
      return res.status(403).json({ message: 'Only mentors can perform this action' });
    }
    next();
  };


module.exports = {authorizeMentor};