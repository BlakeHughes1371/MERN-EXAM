import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, navigate } from '@reach/router';

const OnePet = (props) => {

    const [OnePet, setOnePet] = useState({})

    const deletePet = (e) => {
        console.log("/*/*TRYING TO DELETE A MARINE/*/*")
        axios.delete(`http://localhost:8000/api/pets/delete/${props._id}`)
            .then(response => {
                console.log("/*/*MADE AXIOS.DELETE CALL TO DELETE A PET FROM SERVER/*/*")
                console.log(response)
                console.log("/*/*MADE AXIOS.DELETE CALL TO DELETE A PET FROM SERVER/*/*")
                navigate("/")
            })
            .catch(err => console.log("errors Deleteing A Pet", err))
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${props._id}`)
            .then(response => {
                console.log("/*/*MADE AXIOS.GET CALL TO RETRIEVE ALL PETS FROM SERVER/*/*")
                console.log(response)
                console.log("/*/*MADE AXIOS.GET CALL TO RETRIEVE ALL PETS FROM SERVER/*/*")
                setOnePet(response.data.results)
            })
            .catch(err => console.log("errors retrieveing all pets", err))
    }, [])




    return (
        <div>
            <br />
            <h3>Details About: {OnePet.pet_name }</h3>
            <br />
            <h4>Pet Type: { OnePet.pet_type}</h4>
            <br />
            <h4>Description: {OnePet.pet_description }</h4>
            <br />
            <h4>Pet Skills:</h4>
            <h4>Skill 1: {OnePet.pet_skill_1} </h4>
            <br/>
            <h4>Skill 1: {OnePet.pet_skill_2} </h4>
            <br/>
            <h4>Skill 1: {OnePet.pet_skill_3} </h4>
            
            <button class="btn btn-outline-success">Like</button> |  <button class="btn btn-danger" onClick={deletePet}>Adopt {OnePet.pet_name}</button>
            
        </div>
    );
};



export default OnePet;