const jwt = require('jsonwebtoken');
const User = require('../models/user');

module.exports = async (req, res, next) => {
  const header = req.headers.authorization;
  if(!header || !header.startsWith('Bearer ')) return res.status(401).json({ message:'Unauthorized' });
  const token = header.split(' ')[1];
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(payload.id).select('-password');
    next();
  } catch(err) {
    return res.status(401).json({ message:'Invalid token' });
  }
};
