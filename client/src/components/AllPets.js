import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from '@reach/router';



const AllPets = (props) => {
    const [AllPets, setAllPets] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/pets/all")
            .then(response => {
                console.log("/*/*MADE AXIOS.GET CALL TO RETRIEVE ALL PETS FROM SERVER/*/*")
                console.log(response)
                console.log("/*/*MADE AXIOS.GET CALL TO RETRIEVE ALL PETS FROM SERVER/*/*")
                let results = response.data.results
                results.sort(function (a, b) {
                    var nameA = a.pet_type.toUpperCase(); // ignore upper and lowercase
                    var nameB = b.pet_type.toUpperCase(); // ignore upper and lowercase
                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }

                    // names must be equal
                    return 0;
                });
                setAllPets(results)


            })
            .catch(err => console.log("errors retrieveing all Pets", err))
    }, [])


    return (
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th>Pet Identification Number</th>
                        <th>Pet Name</th>
                        <th>Pet Type</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {AllPets.map((pet, i) => {
                        return (
                            <tr>
                                <th scope="row">{pet._id}</th>
                                <td>{pet.pet_name}</td>
                                <td>{pet.pet_type }</td>
                                <td>{pet.pet_description}</td>
                                <td><button class="btn btn-outline-success"><Link to={`/pets/${pet._id}`}>Details</Link></button> | <button class="btn btn-outline-success"><Link to={`/pets/update/${pet._id}`}>Edit</Link></button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
};



export default AllPets;