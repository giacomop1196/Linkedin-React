import { useState } from "react";

const DeleteExperience = ({profile_id, experience_id, closeEditModal, getExperencies}) => {

  const apiKey = import.meta.env.VITE_API_KEY;
  const apiLinkExperiences = `https://striveschool-api.herokuapp.com/api/profile/${profile_id.profile_id}/experiences/${experience_id}`;

  const deleteButton = () => {
    fetch(apiLinkExperiences, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + apiKey,
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          console.log(" Esperienza eliminata con successo!");
          closeEditModal();
          getExperencies(profile_id);
        } else {
          throw new Error(" Errore nella cancellazione dell'esperienza");
        }
      })
      .catch((error) => {
        console.error("Errore:", error);
      });
  };

  return (
    <p className="me-2 pointer" onClick={deleteButton}>
      Delete experience
    </p>
  );
};

export default DeleteExperience;
