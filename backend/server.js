import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import orderRoutes from './routes/orderRoutes.js';
import authRoutes from './routes/authRoutes.js'; // Import auth routes

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000', // Update this to match your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Database Connection With MongoDB
const mongoUri = process.env.MONGO_URI;
if (!mongoUri) {
  console.error("MongoDB URI is not defined in the environment variables.");
  process.exit(1);
}

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.error("MongoDB connection error:", err));

// Routes
app.use("/api/orders", orderRoutes);
app.use("/api/auth", authRoutes); // Add auth routes

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error', error: err });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});