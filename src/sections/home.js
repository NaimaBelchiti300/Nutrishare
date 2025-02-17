import BannerImage from "./bannerimage";
import Fonctionalite from "./fonctionalite";
import Herosection from "./herosection";
import HowItWorks from "./howitworks";
import Navbar from "./navbar";
import Populairerecepe from "./populairerecep";
import RecipeSection from "./recepesection2";
import Recipes from "./recipes";
import FormReviews from "./formreviews";
import VidioImage from "./vidiobanner";
import Footer from "./footer";
import ReviewsCarousel from "./reveiws";
export default function Home (){
    return(
        <div className="overflow-x-hidden">
            <Navbar/>
        <Herosection />
        <Fonctionalite />
        <BannerImage />
        <HowItWorks />
        <Recipes />
        <RecipeSection />
        <VidioImage />
        <Populairerecepe />
        <ReviewsCarousel />
        <FormReviews />
        <Footer />

        </div>
    )
}