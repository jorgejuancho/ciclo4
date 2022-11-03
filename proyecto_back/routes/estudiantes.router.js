const express = require("express")
const router = express.Router()
const estudiantesController = require("../controllers/estudiantes.controller")


router.post("/", estudiantesController.create);
router.get("/", estudiantesController.find);
router.get("/:id", estudiantesController.findOne);
router.put("/:id", estudiantesController.update);
router.delete("/:id", estudiantesController.remove);

module.exports = router  