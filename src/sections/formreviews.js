import { useState } from "react";
import f1 from "../images/formrevews.jpeg";
import f2 from "../images/formrevews.jpg";
import f3 from "../images/formrevews2.jpg";

export default function FormReviews() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email.includes("@")) {
      setMessage("Veuillez entrer une adresse email valide.");
      return;
    }

    setMessage("Merci pour votre avis !");
    setTimeout(() => setMessage(""), 5000);

    setFormData({ name: "", email: "", comment: "" });

  };

  return (
    <div className="w-full pt-28 flex md:flex-row  flex-col md:space-x-5 space-x-0 space-y-0  md:px-20 px-5 md:pb-0 pb-11" data-aos="fade-in" data-aos-once="false">
      <div className="md:w-2/2 w-full" data-aos="fade-left" data-aos-once="false">
        <div className="grid grid-cols-2  gap-2">
          <div className="grid grid-rows-3 gap-0 pt-14">
            <div className="w-full">
              <img src={f1} className="w-full rounded-xl" />
            </div>
            <div className="w-full">
              <img src={f3} className="w-full rounded-xl" />
            </div>
          </div>
          <div className="w-full">
            <img src={f2} className="w-full rounded-e-full" />
          </div>
        </div>
      </div>

      <div className="md:w-1/2 w-full space-y-5 md:pt-14 " data-aos="fade-right" data-aos-once="false">
        <div className="space-y-1">
          <h1 className="font-bold font-serif md:text-4xl text-xl text-gray">
            Nous Aimerions Avoir Votre Avis
          </h1>
          <p className="md:text-lg text-md w-11/12 font-serif">
            Votre retour est précieux pour nous. Partagez votre expérience et
            aidez-nous à nous améliorer.
          </p>
        </div>

        <form className="space-y-2" onSubmit={handleSubmit}>
          <h3 className="font-serif text-gray text-lg">Nom complet</h3>
          <input
            type="text"
            name="name"
            placeholder="Entrez votre nom complet"
            className="bg-graylight py-2 rounded-md w-full focus:bg-white px-5 text-start"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <h3 className="font-serif text-gray text-lg">Adresse email</h3>
          <input
            type="email"
            name="email"
            placeholder="Entrez votre adresse email"
            className="bg-graylight py-2 rounded-md w-full focus:bg-white px-5 text-start"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <h3 className="font-serif text-gray text-lg">
            Partagez votre avis ou commentaire ici
          </h3>
          <textarea
            name="comment"
            placeholder="Entrez votre avis ou commentaire ici"
            className="bg-graylight py-2 rounded-md w-full focus:bg-white px-5 text-start"
            value={formData.comment}
            onChange={handleChange}
            rows="4"
            required
          />

          <div className="flex justify-start items-center w-full">
            <button
              type="submit"
              className="font-serif w-full rounded-md text-graylight bg-verte px-5 py-2"
            >
              Envoyer mon avis
            </button>
          </div>

          {message && <p className="text-green-600 font-semibold">{message}</p>}
        </form>
      </div>
    </div>
  );
}
