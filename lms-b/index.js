import express from 'express';
import mongoose from 'mongoose';
import User from './models/User.js';
import jwt from 'jsonwebtoken';
import cors from 'cors';

// import routes
import courseRoutes from './routes/courseRoutes.js';
import userRoutes from './routes/userRoutes.js';

// Load environment variables
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(express.json());
const port = 3000;

// ✅ Allow frontend origin
app.use(cors({
    origin: "http://localhost:5173", // frontend URL
    credentials: true
}));

// ------------------ USER ROUTES ------------------

// Signup
app.post('/signup', async (req, res) => {
    await User.create(req.body)
        .then(user => res.status(201).json(user))
        .catch(err => res.status(400).json({ error: err.message }));
});

// Login
app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: "Invalid email or password" });
        }

        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(400).json({ error: "Invalid email or password" });
        }

        const token = jwt.sign(
            { id: user._id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: "24h" }
        );

        res.json({
            message: "Login successful",
            token,
            user: {
                id: user._id,
                username: user.username,
                email: user.email,
                role: user.role
            }
        });
    } catch (err) {
        res.status(500).json({ error: "Server error" });
    }
});

// ------------------ COURSE ROUTES ------------------
app.use("/courses", courseRoutes);
app.use("/users", userRoutes);

// ------------------ SERVER & DB ------------------
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@lmscluster.tflyg3c.mongodb.net/lmsDB?retryWrites=true&w=majority&appName=LMSCluster`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('✅ Connected to Database'))
    .catch(err => console.log(err));

app.listen(port, () => {
    console.log(`🚀 Server running at http://localhost:${port}/`);
});
