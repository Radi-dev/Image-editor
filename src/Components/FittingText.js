import { Textfit } from "react-textfit";
import { useResizeDetector } from "react-resize-detector";

export default function FittingText(props) {
  /*  
  const onResize = useCallback(() => {
    // on resize logic
  }, []);*/

  const sizes = useResizeDetector({
    refreshMode: "debounce",
    refreshRate: 20,
    //onResize,
  });
  return (
    <>
      <div
        ref={sizes.ref}
        className="relative text-center resize bg-blue-300 bg-opacity-20 rounded border-2 border-gray-800 border-dashed p-2 overflow-hidden "
        style={props.style.printModeBorder}
        onClick={() => props.modalHandler(props.child.id)}
      >
        <Textfit mode="multi" style={{ height: "100%", ...props.child.style }}>
          <div>{props.child.data}</div>
        </Textfit>
        <span
          className="  -rotate-45 absolute block -right-1.5 -bottom-1.5 text-center pointer-events-none p w-6 h-6 rounded-full bg-gray-300"
          aria-hidden="true"
          style={props.style.printModeAll}
        >
          ↓
        </span>
      </div>
    </>
  );
}
