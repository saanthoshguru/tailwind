import Appbar from "./Components/Appbar";
import Filters from "./Components/Filters";
import Footer from "./Components/Footer";
import Items from "./Components/Items";
import SeasonSpecial from "./Components/SeasonSpecial";

function App() {
  return (
   <div>
    <Appbar/>
    <Filters/>
    <Items/>
    <SeasonSpecial/>
    <Footer/>
   </div>
  );
}

export default App;
