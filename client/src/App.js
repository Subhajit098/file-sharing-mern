import { useRef, useState, useEffect } from "react";
import './App.css';
import { uploadFile } from "./services/api";
import SpinnerLoading from "./Spinner/Spinner.js";


function App() {

  const [file, setFile] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const fileChangeHandler = (e) => {
    setFile(e.target.files[0]);
  }

  const fileInputRef = useRef();

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);
        setLoading(true);
        let response = await uploadFile(data);
        setResponse(response.path);
        setLoading(false);
      }
    }
    getImage();
  }, [file]);

  const OnUploadClick = () => {
    fileInputRef.current.click();
    setLoading(false);
  }


  const copyToClipboard=()=>{
    navigator.clipboard.writeText(response);
  }

  // console.log(file);

  return (

    <div className="container box-margin">
      <div className="text-center align-center">
        <h2 className="mt-3">Simple MERN app for file Shairng</h2>
        <p>Press the Upload button below to share your download link</p>

        <div>
          <p>Name of the file: {file.name}</p>
          <p>Size of the file: {file.size} KB</p>
          <p>Type of the file: {file.type}</p>
        </div>

        <button type="button" onClick={OnUploadClick} className="btn btn-primary mt-3">Upload</button>
        <input type="file" className="input-tag" ref={fileInputRef} onChange={fileChangeHandler} />

        <div className="mt-4">

          {!loading ? (
            <div>
              <a href={response} rel="noopener">{response}</a>
              <button className="btn btn-secondary btn-sm mt-4" onClick={copyToClipboard}>
                Copy to clipboard
              </button>
            </div>
          ) : (
            SpinnerLoading()
          )}

        </div>
      </div>
    </div>

  );
}

export default App;
