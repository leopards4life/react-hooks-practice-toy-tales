import React from "react";

function ToyCard({ toy, onDeleteToy, onUpdateLikes }) {
  const { name, image, likes, id } = toy;

  function handleDeleteToy() {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE",
    })
    .then(res => res.json())
    .then(() => {
      onDeleteToy(toy)
  })
};

function handleUpdateLikes() {
  const updateObj = {
    likes: likes + 1
  }
  fetch(`http://localhost:3001/toys/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type" : "application/json"
    },
    body: JSON.stringify(updateObj),
  })
  .then(res => res.json())
  .then(onUpdateLikes)
}

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn"
      onClick={handleUpdateLikes}
      >Like {"<3"}</button>
      <button 
      className="del-btn"
      onClick={handleDeleteToy}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
