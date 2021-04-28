import video from "../data/video.js";
import MainContent from "./MainContent.js";

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App"> 
     <MainContent {...video} />
    
    </div>
  );
}

export default App;
