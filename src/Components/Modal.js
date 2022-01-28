import React, { useState, useEffect, useRef } from "react";
import Draggable from "react-draggable";
import { SketchPicker } from "react-color";

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

export default function Modal({ open, setOpen, modChildStyles, ...props }) {
  const ref = useRef();
  const closeClick = () => setOpen(null);
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
            <Moda id={props.id} modChildStyles={modChildStyles} />
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

const Moda = ({ id, modChildStyles }) => {
  const [value, setValue] = React.useState("#000");
  const [showPicker, setShowPicker] = useState(false);

  const onClick = () => {
    setShowPicker(!showPicker);
  };

  const onClose = () => {
    setShowPicker(false);
  };

  const onChangeColor = (color) => {
    console.log(color.rgb);
    console.log(id);
    const rgb = color.rgb;
    const colorStyle = { color: `rgba(${rgb.r},${rgb.g},${rgb.b},${rgb.a})` };
    id ? modChildStyles(id, colorStyle) : console.log();
    setValue(color.rgb);
  };

  return (
    <div
      id="modal"
      class="bg-white top- 32 absolute right-8 rounded shadow p-8 m-4 max-w-xs text-center"
    >
      <strong className="text-gray-600 absolute top-0 text-right pr-4 inset-x-0 ">
        o
      </strong>
      <div class="mb-4">
        <SketchPicker color={value} onChange={onChangeColor} />
      </div>
    </div>
  );
};
