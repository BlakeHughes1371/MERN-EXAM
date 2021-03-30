const PetController = require("../controllers/pet.controller")

module.exports = app => {
    app.get("/api/pets/all", PetController.findAllPets)
    app.post("/api/pets/create", PetController.createOnePet)
    app.get("/api/pets/random", PetController.findRandomPet)
    app.get("/api/pets/:_id", PetController.findOnePet)
    app.put("/api/pets/update/:_id", PetController.updateOnePet)
    app.delete("/api/pets/delete/:_id", PetController.deleteOnePet)
}
