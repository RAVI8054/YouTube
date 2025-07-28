import User from "../Models/User.model.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';

// Cookie configuration for storing the JWT token
const cookieOptions = {
    httpOnly: true,          // Makes cookie inaccessible to client-side JavaScript
    secure: false,           // Should be true in production (HTTPS)
    sameSite: 'Lax'          // Helps prevent CSRF attacks
};


export async function signUp(req, res) {
    try {
        const { channelName, userName, about, profilePic, password, email } = req.body;

        // Check if user already exists
        const isExist = await User.findOne({ userName });
        if (isExist) {
            return res.status(400).json({ error: "Username already exists. Please try another." });
        }

        // Hash the password using bcrypt before sending db
        const hashedPassword = await bcrypt.hash(password, 3);

        // Create a new user object
        const user = new User({
            userName,
            email,
            password: hashedPassword,
            profilePic,
            channelName: channelName || "Untitled Channel",
            about: about || "No description yet"
        });

        await user.save();

        res.status(201).json({
            message: 'User registered successfully',
            success: true,
            data: user
        });

    } catch (error) {
        // console.error("Signup Error:", error);
        res.status(500).json({ error: 'Server error' });
    }
}

export async function signIn(req, res) {
    try {
        const { userName, password } = req.body;
        const user = await User.findOne({ userName });
        //1234-----hashcode(jsjsjsj)
        // for login compering username and password
        if (user &&  await bcrypt.compare(password,user.password)) {
// if login deatils correct than gernate a jwt token
            // Generate JWT token with user's ID
            const token = jwt.sign({ userId: user._id }, "JWT_SECRET_KEY");

           console.log(token);

            // Set token in HTTP-only cookie
            res.cookie('token', token, cookieOptions);
            res.json({ message: 'Logged successfully', success: "true",token });

        } else {
            res.status(400).json({ error: 'invalid credentials' })
        }


    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
}

// ==========================
// LOGOUT CONTROLLER
// ==========================
export const logout = async (req, res) => {
    // Clear the token cookie to log the user out
    res.clearCookie('token', cookieOptions).json({ message: 'Logged out successfully' });
};