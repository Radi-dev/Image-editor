import { useState, useContext } from "react";
import * as XLSX from "xlsx";

import { AppContext } from "./contexts";
import { loadFont } from "./loadFont";

export default function FileUpload() {
  const [row, setRow] = useState(0);
  const { setImage, handleChildren, arrayData, setArrayData } =
    useContext(AppContext);

  const checkFileType = (e, filetypeArray) => {
    var validExts = [...filetypeArray];
    var fileExt = e.target.value;
    fileExt = fileExt.substring(fileExt.lastIndexOf("."));
    if (validExts.indexOf(fileExt) < 0) {
      console.log(
        "Invalid file selected, valid files are of " +
          validExts.toString() +
          " types."
      );
      return false;
    } else return true;
  };

  const imageFilesHandler = (e) => {
    if (
      checkFileType(e, [
        ".tif",
        ".pjp",
        ".xbm",
        ".jxl",
        ".svgz",
        ".jpg",
        ".jpeg",
        ".ico",
        ".tiff",
        ".gif",
        ".svg",
        ".jfif",
        ".webp",
        ".png",
        ".bmp",
        ".pjpeg",
        ".avif",
      ])
    ) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) setImage(reader.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const fontFilesHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        loadFont(e.target.value, reader.result).catch((err) =>
          console.log(err)
        );
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  const csvFilesHandler = (e) => {
    e.preventDefault();

    if (checkFileType(e, [".xls", ".xlsx", ".csv"])) {
      var files = e.target.files,
        f = files[0];
      var reader = new FileReader();
      reader.onload = function (e) {
        var data = e.target.result;
        let readedData = XLSX.read(data, { type: "binary" });
        const wsname = readedData.SheetNames[0];
        const ws = readedData.Sheets[wsname];

        /* Convert array to json*/
        const dataParse = XLSX.utils.sheet_to_json(ws, { header: 1 });
        var result = dataParse.filter((e) => e.length);
        setArrayData(result);
      };
      reader.readAsBinaryString(f);
    }
  };
  const previous = (second) => {
    let newRow = row === 0 ? arrayData.length - 1 : row - 1;
    //
    handleChildren(arrayData[newRow]);
    setRow(newRow);
  };
  const next = (second) => {
    let newRow = row === arrayData.length - 1 ? 0 : row + 1;
    //
    handleChildren(arrayData[newRow]);
    setRow(newRow);
  };
  const resetRow = (second) => {
    handleChildren(arrayData[0]);
    setRow(0);
  };
  //handleChildren(arrayData[row]);
  return (
    <section className="grid gap-3">
      <div>
        <input
          type="file"
          name="image-upload"
          id="input"
          accept="image/*"
          onChange={imageFilesHandler}
        />
      </div>
      <input
        type="file"
        accept=".xls, .xlsx, .csv"
        onChange={csvFilesHandler}
        className=" form-control"
      />
      <div>
        <input
          type="file"
          name="font-upload"
          id="inputfont"
          onChange={fontFilesHandler}
        />
      </div>
      {arrayData ? (
        <>
          <div className="flex items-center w-10 m-2">
            <button
              onClick={previous}
              type="button"
              className="w-screen p-4 border text-base rounded-l-xl text-gray-600 bg-white hover:bg-gray-100"
            >
              <svg
                width="9"
                fill="currentColor"
                height="8"
                className=""
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z"></path>
              </svg>
            </button>
            <button
              onClick={resetRow}
              type="button"
              className="w-full border text-base font-medium text-black bg-white hover:bg-gray-100 px-4 py-2"
            >
              0
            </button>

            <button
              onClick={next}
              type="button"
              className="w-full p-4 border-t border-b border-r text-base  rounded-r-xl text-gray-600 bg-white hover:bg-gray-100"
            >
              <svg
                width="9"
                fill="currentColor"
                height="8"
                className=""
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
              </svg>
            </button>
          </div>
          <p>
            Line {row + 1} of {arrayData.length}
          </p>
          <div className="flex w-full overflow-x-scroll">
            {arrayData[row].map((data, i) => (
              <div
                className="border-gray-400 h-36 rounded-lg m-1 p-1 border-2"
                key={i}
                onClick={() => handleChildren(arrayData[row])}
              >
                {i + 1}. {data}
              </div>
            ))}
          </div>
        </>
      ) : (
        ""
      )}
    </section>
  );
}
