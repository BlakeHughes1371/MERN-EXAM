const mongoose = require('mongoose');


const PetSchema = new mongoose.Schema({
    pet_name: {
        type: String,
        required: [true, "Pet Name Is Required!"],
        minLength: [3, "Pet Name Must Be At Least 3 Characters"]
    },
    pet_type: {
        type: String,
        required: [true, "Pet Type Is Required!"],
        minLength: [3, "Pet Type Must Be At Least 3 Characters"]
    },
    pet_description: {
        type: String,
        required: [true, "Pet Description Is Required!"],
        minLength: [3, "Pet Description Must Be At Least 3 Characters"]
    },
    pet_skill_1: {
        type: String,
        
    },
    pet_skill_2: {
        type: String,
        
    },
    pet_skill_3: {
        type: String,
        
    }

})

const Pet = mongoose.model("Pet", PetSchema)

module.exports = Pet;

