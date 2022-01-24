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
        className="relative text-center resize bg-orange-300 rounded border border-dashed shadow p-2 overflow-hidden "
      >
        <Textfit mode="multi" style={{ height: "100%" }}>
          {props.children}
        </Textfit>
        <span
          className="  -rotate-45 absolute block -right-1.5 -bottom-1.5 text-center pointer-events-none p w-6 h-6 rounded-full bg-gray-300"
          aria-hidden="true"
        >
          ↓
        </span>
      </div>
    </>
  );
}
