import mongoose from "mongoose";

const organizationSchema = new mongoose.Schema({
  organisation_name: {
    type: String,
    trim: true,
    required: true,
    max: 32,
  },
  username: {
    type: String,
    trim: true,
    required: true,
    max: 32,
  },
  email: {
    type: String,
    trim: true,
    required: true,
    lowercase: true,
    unique: true
  },
  employees: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // Replace with the actual name of your User model
    },
  ],
  resetPasswordLink: {
      data: String,
      default: "",
  },
},{ timestamps: true });

const Organization = mongoose.model('Organization', organizationSchema);

module.exports = Organization;
