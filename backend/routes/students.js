const router = require('express').Router();
const auth = require('../middleware/auth');
const role = require('../middleware/role');
const Student = require('../models/student');

// Admin: view all students, create, update, delete
router.get('/', auth, role(['admin']), async (req,res)=> {
  // optionally add pagination via query params page, limit
  const students = await Student.find().sort('-createdAt');
  res.json(students);
});

router.post('/', auth, role(['admin']), async (req,res)=> {
  const { name, email, course, enrollmentDate } = req.body;
  const s = await Student.create({ name, email, course, enrollmentDate });
  res.status(201).json(s);
});

router.put('/:id', auth, role(['admin']), async (req,res)=>{
  const updated = await Student.findByIdAndUpdate(req.params.id, req.body, { new:true });
  res.json(updated);
});

router.delete('/:id', auth, role(['admin']), async (req,res)=>{
  await Student.findByIdAndDelete(req.params.id);
  res.json({ message:'Deleted' });
});

// Student: view/update own profile
router.get('/me', auth, role(['student','admin']), async (req,res)=>{
  // If student's data stored in Student model, find by email or user id
  const student = await Student.findOne({ email: req.user.email }) || { name: req.user.name, email: req.user.email };
  res.json(student);
});

router.put('/me', auth, role(['student']), async (req,res)=>{
  const { name, email, course } = req.body;
  const student = await Student.findOneAndUpdate({ email: req.user.email }, { name, email, course }, { new:true, upsert:true });
  // also update User name/email if desired
  await require('../models/user').findByIdAndUpdate(req.user._id, { name, email }, { new:true });
  res.json(student);
});

module.exports = router;
