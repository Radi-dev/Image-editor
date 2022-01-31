import React, { useState, useEffect, useRef, useContext } from "react";
import Draggable from "react-draggable";
import { SketchPicker } from "react-color";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import FontPickComponent from "./fontPicker";
import TextStyleToggles from "./textStyleToggles";
import { AppContext, WorkspaceContext } from "./contexts";

// custom Hook
function OnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

export default function Modal() {
  const ref = useRef();
  const { open, setOpen } = useContext(WorkspaceContext);
  OnClickOutside(ref, () => setOpen(null));

  return (
    <>
      <Draggable handle="strong">
        {open ? (
          <div
            ref={ref}
            className="
          absolute right-0 p-0 top-4  z-40"
          >
            <Moda openId={open} />
          </div>
        ) : (
          <div
            ref={ref}
            className="hidden 
         "
          ></div>
        )}
      </Draggable>
    </>
  );
}

const Moda = ({ openId }) => {
  const [colorValue, setcolorValue] = React.useState("#000");
  const [showPicker, setShowPicker] = useState(false);
  const [activeFontFamily, setActiveFontFamily] = useState("Open Sans");
  const [textAlign, setTextAlign] = useState("center");
  const [bold, setBold] = useState("normal");
  const [italic, setItalic] = useState("normal");

  const { modifyTextboxStyles } = useContext(AppContext);

  const onClick = () => {
    setShowPicker(!showPicker);
  };

  const onClose = () => {
    setShowPicker(false);
  };

  const handleBold = () => {
    const weightProp = bold === "normal" ? "bold" : "normal";
    const weight = { fontWeight: weightProp };
    openId ? modifyTextboxStyles(openId, weight) : console.log();
    setBold(weightProp);
  };

  const handleItalic = () => {
    const italicProp = italic === "normal" ? "italic" : "normal";
    const italicize = { fontStyle: italicProp };
    openId ? modifyTextboxStyles(openId, italicize) : console.log();
    setItalic(italicProp);
  };

  const handleAlign = (align) => {
    //  const fontFamily = { fontFamily: font };
    //  openId ? modifyTextboxStyles(openId, fontFamily) : console.log();
    // setActiveFontFamily(font);
  };

  const onChangeColor = (color) => {
    const rgb = color.rgb;
    const colorStyle = { color: `rgba(${rgb.r},${rgb.g},${rgb.b},${rgb.a})` };
    openId ? modifyTextboxStyles(openId, colorStyle) : console.log();
    setcolorValue(rgb);
  };
  const onChangeFont = (font) => {
    const fontFamily = { fontFamily: font };
    openId ? modifyTextboxStyles(openId, fontFamily) : console.log();
    setActiveFontFamily(font);
  };

  return (
    <div
      id="modal"
      class="bg-white top- 32 absolute right-8  rounded shadow p-8 m-4 min-h-max text-center flex justify-center"
      style={{ height: "420px", width: "300px" }}
    >
      <strong className="text-gray-600 absolute top-0 text-right pr-4 inset-x-0 ">
        o
      </strong>
      <Tabs>
        <TabList>
          <Tab>Font</Tab>
          <Tab>Color</Tab>
        </TabList>

        <TabPanel>
          <div className="rounded p-2 drop-shadow-sm shadow-lg">
            {" "}
            <FontPickComponent
              activeFontFamily={activeFontFamily}
              onChangeFont={onChangeFont}
            />
            <br />
            <hr />
            <br />
            <TextStyleToggles
              bold={bold}
              italic={italic}
              changeBold={handleBold}
              changeItalic={handleItalic}
            />
          </div>
        </TabPanel>
        <TabPanel>
          <div>
            <SketchPicker color={colorValue} onChange={onChangeColor} />
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};
