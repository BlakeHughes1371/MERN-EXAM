const Pet = require('../models/pet.model')

module.exports.findAllPets = (req, res)=>{
    Pet.find()
        .then(allPets => {
            console.log("*/*/TRYING TO FIND ALL THE PETS*/*/")
            res.json({results: allPets}) 
        })
        .catch(err => res.json(err))
}

module.exports.createOnePet = (req, res) => {
    console.log("******request.body******", req.body)
    Pet.create(req.body)
        .then(newlyCreatedPet => {
            console.log("*/*/TRYING TO CREATE ONE PET*/*/")
            res.json({ results: newlyCreatedPet })
        })
        .catch(err => res.json(err))
}

module.exports.findRandomPet = (req, res) => {
    Pet.find()
        .then(allPet => {
            console.log("*/*/ TRYING TO FIND RANDOM PET */*/")
            let maxindex = allPet.length
            console.log(Math.random(maxindex))
            function GetRandomInt(max) {
                return Math.floor(Math.random() * Math.floor(max));
            }
            let randomNum = GetRandomInt(maxindex)
            console.log("random index it is", randomNum)
            res.json({ results: allPet[randomNum] })
        })
        .catch()
}


module.exports.findOnePet = (req,res)=>{
    Pet.findOne({_id: req.params._id})
        .then(onePet => {
            console.log("*/*/TRYING TO FIND ONE PET*/*/")
            res.json({ results: onePet })
        })
        .catch(err => res.json(err))
}

module.exports.updateOnePet = (req,res)=>{
    Pet.findOneAndUpdate(
        {_id: req.params._id}, 
        req.body,
        {new:true, runValidators:true
        })
        .then(updatedPet => {
            console.log("*/*/TRYING TO UPDATE ONE PET*/*/")
            res.json({ results: updatedPet })
        })
        .catch(err => res.json(err))
}


module.exports.deleteOnePet = (req,res)=>{
    Pet.findOneAndDelete({_id: req.params._id})
        .then(deletedResult => {
            console.log("/*/*/*TRYING TO DELETE ONE PET/*/*/*")
            res.json({ results: deletedResult })
        })
        .catch(err => res.json(err))
}
