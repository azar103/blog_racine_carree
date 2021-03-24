const express = require("express");
const bookCtrl = require("../controllers/book");
const router = express.Router();

router.get("/", bookCtrl.getAllBooks);
router.post("/addBook", bookCtrl.createBook);
router.put("/:_id", bookCtrl.updateBook);
router.delete("/:id", bookCtrl.deleteBook);
router.get("/:id", bookCtrl.getOneBook);

module.exports = router;
