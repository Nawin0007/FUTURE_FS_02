const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
}, {
  timestamps: true,
  collection: 'users', // explicitly set collection name
});

// Ensure the model is created in the ecommerce database
const User = mongoose.connection.useDb('ecommerce').model('User', UserSchema);

module.exports = User;
