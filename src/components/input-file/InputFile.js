import React from "react";
import documentParser, {
  undefinedDrawingTracker,
} from "../../util/documentParser";

const InputFile = () => {
  const handleOnChange = (e) => {
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      const parser = new DOMParser();
      const xml = fileReader.result;
      const document = parser.parseFromString(xml, "text/xml");
      const project = documentParser(document);
      const drawing = project.pipeNetworks[0].drawing;
      undefinedDrawingTracker(drawing, (item) => {
        throw new Error("One of drawing items is not parse correctly", item);
      });
    };
    fileReader.readAsText(file);
  };

  return (
    <div className="input-file">
      <label className="input-file__label">
        <input
          className="input-file__input"
          type="file"
          accept=".xml"
          onChange={handleOnChange}
        />
        <h2>Wczytaj plik</h2>
      </label>
    </div>
  );
};
export default InputFile;
