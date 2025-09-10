const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const generateToken = (user) => {
  return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN || '7d' });
}

exports.signup = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    if(!name || !email || !password) return res.status(400).json({ message:'Missing fields' });

    const existing = await User.findOne({ email });
    if(existing) return res.status(400).json({ message:'Email already taken' });

    const hashed = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashed, role: role || 'student' });
    
    // optionally create Student document here for student role
    const token = generateToken(user);
    res.status(201).json({ user: { id:user._id, name:user.name, email:user.email, role:user.role }, token });
  } catch(err) {
    console.error(err); res.status(500).json({ message:'Server error' });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if(!user) return res.status(400).json({ message:'Invalid credentials' });

    const ok = await bcrypt.compare(password, user.password);
    if(!ok) return res.status(400).json({ message:'Invalid credentials' });

    if(user.isVerified === false) return res.status(403).json({ message:'Please verify email' });

    const token = generateToken(user);
    res.json({ user: { id:user._id, name:user.name, email:user.email, role:user.role }, token });
  } catch(err){
    console.error(err); res.status(500).json({ message:'Server error' });
  }
};
