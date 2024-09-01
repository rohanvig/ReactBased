import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minlength: [3, "First name must contain at least 3 characters"],
    maxlength: [30, "First name cannot exceed 30 characters"],
  },
  lastName: {
    type: String,
    required: true,
    minlength: [3, "last name must contain at least 3 characters"],
    maxlength: [30, "last name cannot exceed 30 characters"],
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
    minlength: [10, "phone number must be at least 10 digits"],
    maxlength: [10, "phone number cannot exceed 15 digits"],
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