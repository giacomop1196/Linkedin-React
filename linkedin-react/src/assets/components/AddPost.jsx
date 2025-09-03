import { Image } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useState } from "react";

const AddPost = () => {


    const profileData = useSelector((state) => state.profile.data);
    const apiLink = 'https://striveschool-api.herokuapp.com/api/posts/'
    const apiKey = import.meta.env.VITE_API_KEY;

    const [formValues, setFormValues] = useState({
        text: "",
    });

    const changeValues = (e) => {
        const { name, value } = e.target;
        setFormValues((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const addPost = (e) => {

        e.preventDefault();

        fetch(apiLink, {
            method: "POST",
            body: JSON.stringify(formValues),
            headers: {
                Authorization: "Bearer " + apiKey,
                "Content-Type": "application/json",
            },
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error("Errore nel recupero dei dati");
            })
            .then((experiences) => {
                console.log(experiences, "Dati esperienza aggiunti:");
                // Resetta i valori del form.
                setFormValues({
                    text: "",
                });
            })
            .catch((error) => {
                console.error("Errore nel recupero dei dati:", error);
            });
    };

    return (
        <>
            <div className="d-flex align-items-center mb-3">
                <Image
                    src={profileData.image}
                    alt="User Profile"
                    className="rounded-circle me-2"
                    style={{ width: '45px', height: '40px' }}
                />
                <input
                    type="text"
                    className="form-control rounded-pill"
                    placeholder="Crea un post"
                />
            </div>
        </>
    )
}

export default AddPost