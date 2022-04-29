import {useState } from "react";

function App() {
  const baseURL = "https://api.collegeai.com/v1/api/college-list?api_key=zPrUOEVtV86G&limit=100";
  const [getResult, setGetResult] = useState(null);
  const fortmatResponse = (res) => {
    return JSON.stringify(res, null, 2);
  }
  async function getAllData() {
    try {
      const res = await fetch(`${baseURL}`);
      if (!res.ok) {
        const message = `An error has occured: ${res.status} - ${res.statusText}`;
        throw new Error(message);
      }
      const data = await res.json();
      const result = {
        status: res.status + "-" + res.statusText,
        headers: {
          "Content-Type": res.headers.get("Content-Type"),
          "Content-Length": res.headers.get("Content-Length"),
        },
        length: res.headers.get("Content-Length"),
        data: data,
      };
      setGetResult(fortmatResponse(result));
    } catch (err) {
      setGetResult(err.message);
    }
  }

  return (
    <div className="card">
      <div className="card-header">React Fetch GET - BezKoder.com</div>
      <div className="card-body">
        <div className="input-group input-group-sm">
          <button className="btn btn-sm btn-primary" onClick={getAllData}>Get All</button>
        </div>   
        
        { getResult && <div className="alert alert-secondary mt-2" role="alert"><pre>{getResult}</pre></div> }
      </div>
    </div>
  );
}

export default App;