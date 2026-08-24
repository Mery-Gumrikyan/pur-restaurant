import Video from "./Components/Video/Video";
import Dishes from "./Components/Dishes/Dishes";
import ImagesPart from "./Components/ImagesPart/ImagesPart";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";

function Home() {
  return (
    <div className="home">
      <Video />
      <Dishes />
      <ImagesPart />
      <About />
      <Footer />
    </div>
  );
}

export default Home;
