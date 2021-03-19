import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { v4 as uuidv4 } from "uuid";
import Footer from "./components/Footer";

function App() {
  const data = [
    {
      id: uuidv4(),
      title: "taher guiga",
      urlImg:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Bahri_Guiga.jpg/208px-Bahri_Guiga.jpg",
    },
    {
      id: uuidv4(),
      title: "musée des mircoscopes",
      urlImg:
        "https://www.holland.com/upload_mm/e/4/e/54833_fullimage_wand%20150%20petrischalen%20met%20verschillende%20micro-organismen.%20foto%20micropia%2C%20maarten%20van%20der%20wal_818x512.jpg",
    },
    {
      id: uuidv4(),
      title: "l'homme qui a visité israel",
      urlImg:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Sadat_1.jpg/220px-Sadat_1.jpg",
    },
    {
      id: uuidv4(),
      title: "le pays le plus francophone au monde",
      urlImg:
        "https://www.unicef.org/sites/default/files/styles/press_release_feature/public/20200331_DRC_Report.jpg?itok=BccQFyKl",
    },
    {
      id: uuidv4(),
      title: "elle a disparu le 19 mars",
      urlImg: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Ouleya.jpg",
    },
    {
      id: uuidv4(),
      title: "3 millions par minute sont jetés dans le monde",
      urlImg:
        "https://www.leparisien.fr/resizer/O4oQSvihT9TQOPzur1bP4Q8Otl4=/932x582/cloudfront-eu-central-1.images.arcpublishing.com/leparisien/Y7OXGSZKHCDDSTRYSQNYL56XAQ.jpg",
    },
    {
      id: uuidv4(),
      title: "pourquoi les avions sont blanches?",
      urlImg: "https://pagtour.info/wp-content/uploads/2018/06/Imagen3-5.jpg",
    },
    {
      id: uuidv4(),
      title: "qui a dit ezin hédha lwech?",
      urlImg:
        "https://img.discogs.com/MSeIJA_6Asr2kYrqaM7FaohPhfY=/264x350/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-4554193-1439464195-8121.jpeg.jpg",
    },
  ];
  return (
    <div>
      <Navbar />
      <Home posts={data} />
      <Footer />
    </div>
  );
}

export default App;
