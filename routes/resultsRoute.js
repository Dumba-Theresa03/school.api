const { Router } = require("express");
const {createResults, deleteResults} = require("../controllers/resultsController")


const { protect, admin } = require("../middlewares/authMiddlewares");

const router = Router();


router.route("/results").post( protect, admin, createResults).delete(protect, admin, deleteResults)
router.delete("/results/:id", deleteResults)


module.exports = router;
 