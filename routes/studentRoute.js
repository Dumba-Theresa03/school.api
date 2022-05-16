const { Router } = require("express");
const {
  createStudent,
  getStudent,
  deleteStudent
} = require("../controllers/studentController");
const { protect, admin } = require("../middlewares/authMiddlewares");

const router = Router();
 
router.route("/students").post(protect, admin, createStudent).get(protect, getStudent);
router.delete("/students/:id", deleteStudent)
module.exports = router;
