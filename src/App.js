import Fonctionalite from "./sections/fonctionalite";
import Herosection from "./sections/herosection";
import HowItWorks from "./sections/howitworks";
import Navbar from "./sections/navbar";
import Populairerecepe from "./sections/populairerecep";
import Recipes from "./sections/recipes";

function App() {
  return (
    <div>
<Navbar/>
<Herosection/>
<Fonctionalite/>
<HowItWorks/>
<Recipes/>
<Populairerecepe/>
    </div>
  );
}

export default App;
