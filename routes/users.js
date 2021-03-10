const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const multer = require('multer');
const keys = require('../config/keys');

const validateRegisterInput = require('../validation/register');
const validateLoginInput = require('../validation/login');
const User = require('../models/User');
const router = express.Router();

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, './uploads/users')
	},
	filename: function (req, file, cb) {
		cb(null, Date.now() + file.originalname)
	}
})

const fileFilter = (req, file, cb) => {
	if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
		cb(null, true)
	} else {
		cb(null, false)
	}
}

const upload = multer({
	storage: storage,
	limits: {
		fileSize: 1024 * 1024 * 5
	},
	fileFilter: fileFilter
})

router.post('/uploadPhoto/:id', upload.single('photo'), (req, res) => {
	User.findByIdAndUpdate({ _id: req.params.id }, { photo: req.file.path }).then(data => {
		res.json(data)
	}).catch(err => {
		res.json(err)
	})
})


router.post('/register', upload.single("photo"), (req, res) => {

	const { errors, isValid } = validateRegisterInput(req.body);

	if (!isValid) {
		return res.status(400).json(errors);
	}
	User.findOne({ email: req.body.email })
		.then((user) => {
			if (user) {
				errors.email = 'Email already exits';
				res.status(400).json(errors);
			} else {
				const newUser = new User({
					name: req.body.name,
					email: req.body.email,
					//photo:req.file.path,
					phone: req.body.phone,
					// user_role: req.body.user_role,
					password: req.body.password
				})
				bcrypt.genSalt(10, (err, salt) => {
					bcrypt.hash(newUser.password, salt, (err, hash) => {
						if (err) throw err;
						newUser.password = hash;
						newUser.save()
							.then((user) => {
								res.json(user);
							})
							.catch((err) => {
								console.log(err);
							})
					})

				})
			}
		})
})



router.post('/register-user', upload.single("photo"), (req, res) => {

	const { errors, isValid } = validateRegisterInput(req.body);

	if (!isValid) {
		return res.status(400).json(errors);
	}
	User.findOne({ email: req.body.email })
		.then((user) => {
			if (user) {
				errors.email = 'Email already exits';
				res.status(400).json(errors);
			} else {
				const newUser = new User({
					name: req.body.name,
					email: req.body.email,
					//photo:req.file.path,
					passwordDecoded: req.body.password,
					phone: req.body.phone,
					// user_role: req.body.user_role,
					password: req.body.password
				})
				bcrypt.genSalt(10, (err, salt) => {
					bcrypt.hash(newUser.password, salt, (err, hash) => {
						if (err) throw err;
						newUser.password = hash;
						newUser.save()
							.then((user) => {
								res.json(user);
							})
							.catch((err) => {
								console.log(err);
							})
					})

				})
			}
		})
})
router.post('/login', (req, res) => {
	const { errors, isValid } = validateLoginInput(req.body);

	if (!isValid) {
		return res.status(400).json(errors);
	}

	const email = req.body.email;
	const password = req.body.password;
	User.findOne({ email })
		.then(user => {
			if (!user) {
				errors.email = 'User not found';
				return res.status(400).json(errors);
			}

			bcrypt.compare(password, user.password)
				.then(isMatch => {
					if (isMatch) {
						const payload = { id: user.id, name: user.name, photo: user.photo, user_role: user.user_role, email: user.email };
						jwt.sign(
							payload,
							keys.secretOrKey,
							{ expiresIn: 36000 * 4 },
							(err, token) => {
								res.json({
									success: true,
									token: 'bearer ' + token
								})
							});
					} else {
						errors.password = 'Incorrect password';
						res.status(400).json(errors);
					}
				})
		});
});

router.post('/update/:id', (req, res) => {
	User.findByIdAndUpdate({ _id: req.params.id }, req.body).then(user => {
		res.json(user)
	}).catch(err => {
		res.json(err)
	})
})

router.get('/delete/:id', (req, res) => {
	User.findByIdAndRemove({ _id: req.params.id })
		.then(data => console.log('data delete succesfully'))
		.catch(err => console.log(err));
})

router.get('/allUser', (req, res) => {
	User.find()
		.then(users => res.json(users))
		.catch(err => console.log(err));
})
router.get('/current', (req, res) => {
	res.json({
		id: req.user.id,
		name: req.user.name,
		email: req.user.email
	});
});

module.exports = router;