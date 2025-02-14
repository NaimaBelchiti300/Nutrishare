import f1 from "../images/formrevews.jpeg";
import f2 from "../images/formrevews.jpg";
import f3 from "../images/formrevews2.jpg";
export default function FormReviews() {
  return (
    <div className="w-full  pt-28 flex flex-row  space-x-5 px-20">
      <div className="w-2/2 ">
        <div className="grid grid-cols-2 gap-2">
         <div className="grid grid-rows-3 gap-0 pt-14">
         <div className="w-full">
            <img src={f1}  className="w-full rounded-xl"/>
          </div>
          <div className="w-full">
            <img src={f3} className=" w-full rounded-xl "/>
          </div>
         </div>
          <div className="w-full ">
          <img src={f2} className="w-full rounded-e-full" />
        </div>
        </div>
       
      </div>
      <div className="w-1/2 space-y-9 pt-16">
   <div className=" space-y-1">
   <h1 className="font-bold font-serif text-4xl text-gray">Nous Aimerions Avoir Votre Avis</h1>
   <p className="text-lg w-11/12 font-serif ">Votre retour est précieux pour nous. Partagez votre expérience et aidez-nous à nous améliorer</p>
   </div>
   <div className="space-y-2">
   <h3 className="font-serif text-gray text-lg"> nom complet</h3>
   <input type="text" placeholder="Entrez votre nom complet" className="bg-graylight py-2 rounded-md w-full focus:bg-white px-10 text-start"/>
   <h3 className="font-serif text-gray text-lg"> adresse email</h3>
   <input type="email" placeholder="Entrez votre adresse email" className="bg-graylight py-2 rounded-md w-full focus:bg-white px-10 text-start"/>
   <h3 className="font-serif text-gray text-lg">Partagez votre avis ou commentaire ici</h3>
   <input type="email" placeholder="Entrez votre avis ou commentaire ici" className="bg-graylight py-2 rounded-md w-full focus:bg-white px-10 text-start"/>
   </div>
<div className="flex justify-start items-center w-full">
<button className="font-serif w-full rounded-md text-graylight bg-verte px-5 py-2 ">Envoyer mon avis</button>
</div>
      </div>
    </div>
  );
}
