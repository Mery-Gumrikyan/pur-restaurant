import Header from "./Components/Header/Header";
import { PourAdvertisementVideo } from "./Components/CustomVideoPlayer/CustomVideoPlayer";
import Dishes from "./Components/Dishes/Dishes";
import ImagesPart from "./Components/ImagesPart/ImagesPart";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <PourAdvertisementVideo />
      <Dishes />
      <ImagesPart />
      <About />
      <Footer />
    </>
  );
}

export default App;
