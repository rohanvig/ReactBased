import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minlength: [3, "First name must contain at least 3 characters"],
    maxLength: [30, "First name cannot exceed 30 characters"],
  },
  lastName: {
    type: String,
    required: true,
    minlength: [3, "Last name must contain at least 3 characters"],
    maxLength: [30, "Last name cannot exceed 30 characters"],
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [validator.isEmail, "provide a valid email"],
  },
  phone: {
    type: String,
    required: true,
    minLength: [10, "phone number must be at least 10 digits"],
    maxLength: [10, "phone number cannot exceed 15 digits"],
  },
  time: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

export const Reservation=mongoose.model('Reservation',reservationSchema);