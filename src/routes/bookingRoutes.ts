import express from "express";
import {
  bookingInfo,
  createBooking,
  findAllPaginatedBookings,
  getAllBooking,
  getMyBorrowedBooks,
  returnBook,
} from "../controllers/bookingController";

const router = express.Router();

router.get("/bookings", getAllBooking);
router.get("/bookings/paginate", findAllPaginatedBookings);
router.get("/booking/:username", getMyBorrowedBooks);
router.get("/booking/:id", bookingInfo);
router.post("/booking", createBooking);
router.patch("/booking/return", returnBook);

export default router;
