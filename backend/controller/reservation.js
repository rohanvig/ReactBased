import ErrorHandler from "../error/error.js";
import { Reservation } from "../models/reservationSchema.js";

export const sendReservation = async (req, res, next) => {
  const { firstName, lastName, email, phone, date, time } = req.body;

  // Check if all required fields are provided
  if (!firstName || !lastName || !email || !phone || !date || !time) {
    return next(new ErrorHandler("Please fill in all fields", 400));
  }

  try {
    // Create the reservation with an object containing the data
    await Reservation.create({
      firstName,
      lastName,
      email,
      phone,
      date,
      time,
    });

    // Send a success response
    res
      .status(201)
      .json({ success: true, message: "Reservation created successfully" });
  } catch (error) {
    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map(
        (err) => err.message
      );
      return next(new ErrorHandler(validationErrors.join(","), 400));
    }
    return next(error);
  }
};
