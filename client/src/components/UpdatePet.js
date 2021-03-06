import React, { useEffect, useState } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';


const UpdatePet = (props) => {
    const [PetInfo, setPetInfo] = useState({
        pet_name: "",
        pet_type: "",
        pet_description: "",
        pet_skill_1: "",
        pet_skill_2: "",
        pet_skill_3: "",
    })

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${props._id}`)
            .then(results => {
                console.log("/*/*MADE AXIOS.GET CALL TO RETRIEVE ALL PETS FROM SERVER/*/*")
                console.log(results)
                console.log("/*/*MADE AXIOS.GET CALL TO RETRIEVE ALL PETS FROM SERVER/*/*")
                setPetInfo(results.data.results)
            })
            .catch(err => console.log("errors retrieveing all Pets", err))
    }, [PetInfo._id])

    const changeHandler = (e) => {
        console.log("TRYING TO CHANGE FORM DATA")
        setPetInfo({
            ...PetInfo,
            [e.target.name]: e.target.value
        })
    }

    const [errors, setErrors] = useState({})


    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/pets/update/${props._id}`, PetInfo)
            .then(results => {
                console.log(results => "*/*/ EDITING PET*/*/", results)
                if (results.data.errors) {
                    console.log("THERE WAS AN ERROR ADDING A PET")
                    setErrors(results.data.errors)
                }
                else {
                    navigate("/")
                }
            })
            .catch(err => console.log(" ERROR EDITING PET", err))    
    }


    return (
        <div>
            <br />
            <h2>Edit: {PetInfo.pet_name}</h2>
            <form className="col-6 mx-auto" onSubmit={onSubmitHandler}>
                <div className="form-group">
                    <label>Pet Name:</label>
                    <input type="text" name="pet_name" id="" className="form-control" onChange={changeHandler} value={PetInfo.pet_name} />
                    <p className="text-danger">{errors.pet_name ? errors.pet_name.message : ""}</p>
                </div>
                <div className="form-group">
                    <label>Pet Type:</label>
                    <input type="text" name="pet_type" id="" className="form-control" onChange={changeHandler} value={PetInfo.pet_type} />
                    <p className="text-danger">{errors.pet_type ? errors.pet_type.message : ""}</p>
                </div>
                <div className="form-group">
                    <label>Pet Description:</label>
                    <input type="text" name="pet_description" id="" className="form-control" onChange={changeHandler} value={PetInfo.pet_description}/>
                    <p className="text-danger">{errors.pet_description ? errors.pet_description.message : ""}</p>
                </div>
                <div className="form-group">
                    <h6>Pet Skills: (Optional)</h6>
                    <label>Skill 1:</label>
                    <input type="text" name="pet_skill_1" id="" className="form-control" onChange={changeHandler} value={PetInfo.pet_skill_1}/>
                    <p className="text-danger">{errors.pet_skill_1 ? errors.pet_skill_1.message : ""}</p>
                </div>
                <div className="form-group">
                    <label>Skill 2:</label>
                    <input type="text" name="pet_skill_2" id="" className="form-control" onChange={changeHandler} value={PetInfo.pet_skill_2}/>
                    <p className="text-danger">{errors.pet_skill_2 ? errors.pet_skill_2.message : ""}</p>
                </div>
                <div className="form-group">
                    <label>Skill 3:</label>
                    <input type="text" name="pet_skill_3" id="" className="form-control" onChange={changeHandler} value={PetInfo.pet_skill_3}/>
                    <p className="text-danger">{errors.pet_skill_3 ? errors.pet_skill_3.message : ""}</p>
                </div>
                
                <input type="submit" value="Edit Pet" className="btn btn-success" />
            </form>
        </div>
    );
};



export default UpdatePet;