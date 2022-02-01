import { radioButtons } from "./radioButtons";
export default function TextStyleToggles({
  bold,
  italic,
  align,
  changeBold,
  changeItalic,
  changeAlign,
  ...props
}) {
  return (
    <>
      <div className="grid grid-cols-2 mt-3">
        <div className="mb-8 flex">
          <div className="relative inline-block w-10 mr-2 align-middle select-none">
            <input
              type="checkbox"
              name="Bold"
              id="Bold"
              onChange={changeBold}
              className={`${
                bold === "normal" ? "right-5 " : "bg-green-500 right-0"
              } absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer`}
            />
            <label
              htmlFor="Bold"
              className="block overflow-hidden h-5 rounded-full bg-gray-300 cursor-pointer"
            ></label>
          </div>
          <span
            style={{ color: bold === "normal" ? "rgb(156 163 175)" : "black" }}
            className=" font-medium"
          >
            Bold
          </span>
        </div>
        <div className="mb-8 flex">
          <div className="relative inline-block w-10 mr-2 align-middle select-none">
            <input
              type="checkbox"
              name="Italic"
              id="Italic"
              onChange={changeItalic}
              className={`${
                italic === "normal" ? "right-5 " : "bg-yellow-500 right-0"
              } absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer`}
            />
            <label
              htmlFor="Italic"
              className="block overflow-hidden h-5 rounded-full bg-gray-300 cursor-pointer"
            ></label>
          </div>
          <span
            style={{
              color: italic === "normal" ? "rgb(156 163 175)" : "black",

              fontStyle: "italic",
            }}
            className=" font-medium"
          >
            Italic
          </span>
        </div>

        <fieldset
          className="col-span-2 grid grid-cols-2"
          onChange={(e) => changeAlign(e.target.value)}
        >
          <legend className="">Text Alignment</legend>
          {radioButtons.map((radioBtn, i) => (
            <div key={i} className="mb-3 gap-3 flex items-center">
              <div className="inline-flex  items-center ">
                {console.log("align is: " + align)}
                {align === radioBtn.name ? (
                  <input
                    type="radio"
                    name="textAlign"
                    value={radioBtn.name}
                    checked
                    className="form-radio h-5 w-5"
                    style={{ color: radioBtn.color }}
                  />
                ) : (
                  <input
                    type="radio"
                    name="textAlign"
                    id={radioBtn.name}
                    value={radioBtn.name}
                    className="form-radio h-5 w-5"
                    style={{ color: radioBtn.color }}
                  />
                )}
                <label
                  htmlFor={radioBtn.name}
                  className="block overflow-hidden h-5 rounded-full bg-gray-300 cursor-pointer"
                ></label>
              </div>
              <span
                style={{
                  color: align === radioBtn.name ? "black" : "rgb(156 163 175)",
                }}
                className="text-gray-400 font-medium"
              >
                {radioBtn.icon}
              </span>
            </div>
          ))}
        </fieldset>
      </div>
    </>
  );
}
