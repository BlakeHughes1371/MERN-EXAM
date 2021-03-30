import { Router, Link } from '@reach/router';
import AllPets from './components/AllPets';
import OnePet from './components/OnePet';
import CreatePet from './components/CreatePet';
import UpdatePet from './components/UpdatePet';


function App() {



  return (
    <div className="App">
      <h1>Pet Shelter</h1> 
      <button class="btn btn-outline-success" ><Link to="/">Home</Link></button> |  <button class="btn btn-outline-success" ><Link to="/pets/create">Add A Pet To The Shelter</Link></button>
      <hr/>
      <Router>
        <AllPets path="/"></AllPets>
        <OnePet path="/pets/:_id"></OnePet>
        <UpdatePet path="/pets/update/:_id"></UpdatePet>
        <CreatePet path="/pets/create"></CreatePet>
      </Router>
    </div>
  );
}

export default App;
