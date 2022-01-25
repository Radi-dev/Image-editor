import { useState, useRef, useEffect } from "react";
import {
  exportComponentAsJPEG,
  exportComponentAsPDF,
  exportComponentAsPNG,
} from "react-component-export-image";
import html2canvas from "html2canvas";

import FileUpload from "./Components/Uploads";
import Workspace from "./Components/Workspace";

import { styles } from "./Components/styles";
function App() {
  const componentRef = useRef();
  const [image, setImage] = useState("/22.jpg");
  const [childrenItems, setChildrenItems] = useState([]);

  const [toggleResize, setToggleResize] = useState(false);
  const [genStyles, setGenStyles] = useState({});

  const handleDownloadImage = async () => {
    const element = componentRef.current;
    const canvas = await html2canvas(element);

    const data = canvas.toDataURL("image/jpg");
    const link = document.createElement("a");

    /*return data;*/
    if (typeof link.download === "string") {
      link.href = data;
      //console.log(link.href);
      link.download = "image.jpg";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(data);
    }
  };

  const handleChildren = (newItem) => {
    //const newArray = [...childrenItems, newItem];
    const newArray = newItem;
    setChildrenItems(newArray);
    console.log("array is: " + newArray);
  };
  const handleSaveAs = (callback) => {
    setGenStyles(styles);
    setTimeout(() => {
      callback(componentRef);
    }, 500);
    setTimeout(() => {
      setGenStyles({});
    }, 500);
  };

  return (
    <>
      <div className="App">
        <Workspace
          image={image}
          ref={componentRef}
          toggleResize={toggleResize}
          style={genStyles}
        >
          {childrenItems}
        </Workspace>
        <FileUpload
          image={image}
          setImage={setImage}
          setChildren={handleChildren}
        />
      </div>

      <div
        className="hidden bg-orange-400 rounded border shadow p-2 inl ine-flex"
        onClick={handleDownloadImage}
      >
        saveFile
      </div>
      <button
        className="border bg-green-200 p-1"
        onClick={() => {
          setGenStyles(styles);
        }}
      >
        click
      </button>
      <button
        className=" border-gray-400 rounded-lg m-1 p-1 border-2"
        onClick={() => handleSaveAs(exportComponentAsJPEG)}
      >
        Export As JPEG
      </button>
      <button
        className=" hidden border-gray-400 rounded-lg m-1 p-1 border-2"
        onClick={() => handleSaveAs(exportComponentAsPDF)}
      >
        Export As PDF
      </button>
      <button
        className=" border-gray-400 rounded-lg m-1 p-1 border-2"
        onClick={() => handleSaveAs(exportComponentAsPNG)}
      >
        Export As PNG
      </button>

      <div
        className=" bg-orange-400 rounded border shadow p-2 inline-flex"
        onClick={handleChildren}
      >
        add element
      </div>
    </>
  );
}

export default App;
