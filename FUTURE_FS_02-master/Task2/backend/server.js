require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("./models/users");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Connect MongoDB with more detailed options and error handling
async function connectToMongoDB() {
  try {
    // Force the database name in the connection
    const mongoUri = "mongodb+srv://rupesh:OC6Xp8VHXkqjfmOL@cluster0.93klya8.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=Cluster0";


    await mongoose.connect(mongoUri);
    
    console.log("✅ Connected to MongoDB");
    console.log("📦 Database Name:", mongoose.connection.db.databaseName);
    
    // Explicitly switch to ecommerce database
    await mongoose.connection.useDb('ecommerce');
    console.log("✅ Switched to ecommerce database");
    
    // Log collections
    const collections = await mongoose.connection.db.listCollections().toArray();
    console.log("📚 Collections:", collections.map(c => c.name));
    
  } catch (err) {
    console.log("❌ MongoDB connection error:");
    console.log("Error name:", err.name);
    console.log("Error message:", err.message);
    if (err.reason) console.log("Error reason:", err.reason);
    process.exit(1); // Exit if we can't connect to the correct database
  }
}

// Connect to MongoDB
connectToMongoDB();

// Register
app.post("/register", async (req, res) => {
  console.log("Register request received:", req.body);
  const { name, email, password } = req.body;

  // Validation
  if (!name || !email || !password) {
    return res.status(400).json({
      success: false,
      message: "Please provide all required fields: name, email, and password"
    });
  }

  if (password.length < 6) {
    return res.status(400).json({
      success: false,
      message: "Password must be at least 6 characters long"
    });
  }

  if (!email.includes('@')) {
    return res.status(400).json({
      success: false,
      message: "Please provide a valid email address"
    });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "Email already exists"
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Creating new user with data:", { name, email });
    
    const user = new User({ name, email, password: hashedPassword });
    console.log("User model created:", user);
    
    try {
      await user.save();
      console.log("User saved successfully:", {
        id: user._id,
        name: user.name,
        email: user.email,
        createdAt: user.createdAt
      });
      
      // Verify the user was saved by fetching it
      const savedUser = await User.findById(user._id);
      console.log("Verified saved user:", savedUser ? "Found" : "Not found");
    } catch (saveError) {
      console.error("Error saving user:", {
        error: saveError.message,
        code: saveError.code,
        name: saveError.name
      });
      throw saveError;
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.json({
      success: true,
      token,
      user: { id: user._id, name, email }
    });
  } catch (err) {
    console.error("Registration error:", err);
    res.status(500).json({
      success: false,
      message: "Server error during registration. Please try again."
    });
  }
});

// Login
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({ success: false, message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ success: false, message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.json({ success: true, token, user: { id: user._id, name: user.name, email } });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
