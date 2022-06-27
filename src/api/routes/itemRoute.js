const {
  createNewLocation,
  editLocation,
  deleteLocation,
  getAllLocations,
  getSpecificLocation,
  calculateDistance,
  addressToCoordinates,
  calculateDistanceDynamic,
} = require("../controllers/itemController");

const router = require("express").Router();
router.post("/", createNewLocation);
router.patch("/:oldLocation", editLocation);
router.delete("/", deleteLocation);
router.get("/all", getAllLocations);
router.get("/specific", getSpecificLocation);
router.get("/calculate", calculateDistance);
router.get("/address-to-coordinates", addressToCoordinates);
router.get("/dynamic", calculateDistanceDynamic);

module.exports = router;
