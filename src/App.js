import BannerImage from "./sections/bannerimage";
import Fonctionalite from "./sections/fonctionalite";
import Herosection from "./sections/herosection";
import HowItWorks from "./sections/howitworks";
import Navbar from "./sections/navbar";
import Populairerecepe from "./sections/populairerecep";
import RecipeSection from "./sections/recepesection2";
import Recipes from "./sections/recipes";

function App() {
  return (
    <div>
<Navbar/>
<Herosection/>
<Fonctionalite/>
<HowItWorks/>
<Recipes/>
<RecipeSection/>
<BannerImage/>
<Populairerecepe/>
    </div>
  );
}

export default App;
