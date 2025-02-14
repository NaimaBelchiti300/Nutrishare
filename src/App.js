import BannerImage from "./sections/bannerimage";
import Fonctionalite from "./sections/fonctionalite";
import Herosection from "./sections/herosection";
import HowItWorks from "./sections/howitworks";
import Navbar from "./sections/navbar";
import Populairerecepe from "./sections/populairerecep";
import RecipeSection from "./sections/recepesection2";
import Recipes from "./sections/recipes";
import FormReviews from "./sections/formreviews";
import VidioImage from "./sections/vidiobanner";
import Footer from "./sections/footer";

function App() {
  return (
    <div>
<Navbar/>
<Herosection/>
<Fonctionalite/>
<HowItWorks/>
<BannerImage/>
<Recipes/>
<RecipeSection/>
<VidioImage/>
<Populairerecepe/>
<FormReviews/>
<Footer/>
    </div>
  );
}

export default App;
