import { useState, useRef } from "react";
import {
  exportComponentAsJPEG,
  exportComponentAsPDF,
  exportComponentAsPNG,
} from "react-component-export-image";
import html2canvas from "html2canvas";
import { useDebounce } from "@react-hook/debounce";

import FileUpload from "./Components/Uploads";
import Workspace from "./Components/Workspace";
import { styles } from "./Components/styles";
import Checkbox from "./Components/checkbox";
import { AppContext } from "./Components/contexts";

function App() {
  const componentRef = useRef();
  const [image, setImage] = useState("/22.jpg");
  const [childrenItems, setChildrenItems] = useDebounce([]);
  const [newStyles, setNewStyles] = useDebounce({});

  //const [toggleResize, setToggleResize] = useState(false);
  const [guideStyles, setGuideStyles] = useState({});
  const [fullImage, setFullImage] = useState(false);

  const handlefullImage = () => {
    setFullImage(!fullImage);
  };

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
    var newArray = [];
    for (var i = 0; i < newItem.length; ++i) {
      var newObj = { id: null, active: false, data: "", style: {} };
      newObj.id = i + 1;
      newObj.data = newItem[i];
      newObj.style = newStyles[i + 1];
      newArray = [...newArray, newObj];
    }
    console.log("arrayrr is: ");
    console.log(newArray);
    setChildrenItems(newArray);
  };

  const modifyTextboxStyles = (id, style = {}) => {
    var newStylesObj = { ...newStyles };
    var childrenItms = [...childrenItems];
    newStylesObj[id] = { ...newStylesObj[id], ...style };
    console.log("style is");
    console.log(newStylesObj);
    childrenItms[id - 1].style = newStylesObj[id];
    setChildrenItems(childrenItms);
    setNewStyles(newStylesObj);

    //setChildrenItems(newObj);
  };

  const handleSaveAs = (callback) => {
    setGuideStyles(styles);
    setTimeout(() => {
      callback(componentRef);
    }, 500);
    setTimeout(() => {
      setGuideStyles({});
    }, 500);
  };

  const handleBatch = (second) => {};

  return (
    <AppContext.Provider
      value={{
        image,
        setImage,
        fullImage,
        componentRef,
        childrenItems,
        guideStyles,
        modifyTextboxStyles,
        handleChildren,
      }}
    >
      <div className=" w-screen box-border">
        <div className=" shadow-xl mb-2">
          <Workspace ref={componentRef} />
        </div>
        <Checkbox
          fullImage={fullImage}
          handleChange={handlefullImage}
          checkText="Fit to screen"
          uncheckText="Use full Image"
        />
        <FileUpload />

        <div
          className="hidden bg-orange-400 rounded border shadow p-2 inl ine-flex"
          onClick={handleDownloadImage}
        >
          saveFile
        </div>
        <div
          className=" bg-orange-400 m-2 rounded border shadow p-2 inline-flex cursor-pointer"
          onClick={() => ""}
        >
          Edit
        </div>
        <button
          className="border bg-green-200 p-1"
          onClick={() => {
            setGuideStyles(styles);
          }}
        >
          preview
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
          className=" bg-orange-400 rounded border shadow p-2 inline-flex cursor-pointer"
          onClick={handleBatch}
        >
          Batch download
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
