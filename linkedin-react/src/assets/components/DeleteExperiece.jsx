const DeleteExperience = (profile_id, experience_Id, closeEditModal) => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const apiLinkExperiences = `https://striveschool-api.herokuapp.com/api/profile/${profile_id}/experiences/${experience_Id}`;
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
        } else {
          throw new Error(" Errore nella cancellazione dell'esperienza");
        }
      })
      .catch((error) => {
        console.error("Errore:", error);
      });
  };
  console.log(experience_Id);
  return (
    <p className="me-2 pointer" onClick={deleteButton}>
      Delete experience
    </p>
  );
};

export default DeleteExperience;
