import { useRef } from "react";
import DisplaySection from "./componets/DisplaySection";
import Jumbotron from "./componets/Jumbotron";
import Nav from "./componets/Nav";
import SoundSection from "./componets/SoundSection";
import WebgiViewer from "./componets/WebgiViewer";
import Loader from "./componets/Loader";

function App() {

  const webGiViewerRef = useRef();
  const contentref = useRef();

  const handlerPreView = () => {

    webGiViewerRef.current.triggerPreview();

  }

  return (
    <div className="App">
      <Loader />
      <div id="content" ref={contentref}>
        <Nav />
        <Jumbotron />
        <SoundSection />
        <DisplaySection triggerPreview={handlerPreView} />
      </div>
      <WebgiViewer contentref={contentref}  ref={webGiViewerRef} />
    </div>
  );
}

export default App;
