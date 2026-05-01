const User = require('../models/User');
const bcrypt = require('bcryptjs');
const generateToken = require('../utils/generateToken');

// @desc    Register a new user
// @route   POST /api/auth/signup
// @access  Public
const signup = async (req, res, next) => {
    try {
        const { name, email, password, storeName, phone } = req.body;

        const userExists = await User.findOne({ email });
        if (userExists) {
            res.status(400);
            throw new Error('User already exists');
        }

        const user = await User.create({
            name,
            email,
            password,
            storeName,
            phone
        });

        if (user) {
            const token = generateToken(res, user._id);
            res.status(201).json({
                success: true,
                message: "Signup successful",
                data: {
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    avatar: user.avatar,
                    storeName: user.storeName,
                    phone: user.phone,
                    token,
                }
            });
        } else {
            res.status(400);
            throw new Error('Invalid user data');
        }
    } catch (error) {
        next(error);
    }
};

// @desc    Auth user & get token
// @route   POST /api/auth/login
// @access  Public
const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (user && user.password && (await bcrypt.compare(password, user.password))) {
            const token = generateToken(res, user._id);
            res.json({
                success: true,
                message: "Login successful",
                data: {
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    avatar: user.avatar,
                    storeName: user.storeName,
                    phone: user.phone,
                    token,
                }
            });
        } else {
            res.status(401);
            throw new Error('Invalid email or password');
        }
    } catch (error) {
        next(error);
    }
};

// @desc    Google OAuth Callback
// @route   GET /api/auth/google/callback
// @access  Public
const googleCallback = (req, res) => {
    const token = generateToken(res, req.user._id);
    // Redirect to frontend dashboard with token
    res.redirect(`${process.env.CLIENT_URL}/dashboard?token=${token}`);
};

// @desc    Update user profile
// @route   PUT /api/auth/profile
// @access  Private
const updateProfile = async (req, res, next) => {
    try {
        const user = await User.findById(req.user._id);

        if (user) {
            user.name = req.body.name || user.name;
            user.email = req.body.email || user.email;
            if (req.body.storeName) user.storeName = req.body.storeName;
            if (req.body.phone) user.phone = req.body.phone;

            const updatedUser = await user.save();

            res.json({
                success: true,
                message: "Profile updated successfully",
                data: {
                    _id: updatedUser._id,
                    name: updatedUser.name,
                    email: updatedUser.email,
                    storeName: updatedUser.storeName,
                    phone: updatedUser.phone,
                    token: generateToken(res, updatedUser._id),
                }
            });
        } else {
            res.status(404);
            throw new Error('User not found');
        }
    } catch (error) {
        next(error);
    }
};

module.exports = {
    signup,
    login,
    googleCallback,
    updateProfile
};
