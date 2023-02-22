import React, { useState, useEffect  } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/toys")
    .then(res => res.json())
    .then(toys => setToys(toys))
  })

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleAddNewToy(newToy) {
    const updatedToys = [{...toys, newToy}];
    setToys(updatedToys);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm 
        onAddNewToy={handleAddNewToy}
      /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer 
        toys={toys}
      />
    </>
  );
}

export default App;
