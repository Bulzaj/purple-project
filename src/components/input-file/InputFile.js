import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { loadProject } from "../../store/actions";
import documentParser, {
  undefinedDrawingTracker,
} from "../../util/documentParser";

const InputFile = () => {
  const history = useHistory();

  const dispatch = useDispatch();
  const handleOnChange = (e) => {
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      const parser = new DOMParser();
      const xml = fileReader.result;
      const document = parser.parseFromString(xml, "text/xml");
      const project = documentParser(document);
      dispatch(loadProject(project));
      history.push("/workspace");
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
