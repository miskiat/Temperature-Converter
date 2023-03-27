import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="containerrr">
        <div className="left">
          <h1 className="enter">Enter Temperature</h1>
          <div className="">
            <h2 className="degree">Degree</h2>
            <div className="degree-box">
              <input
                className="flex-grow outline-none"
                placeholder="0"
                type={"number"}
              />

              <div className="degree-boxx">
                <sup>o</sup>
                <span>C</span>
                <select>
                  <option></option>
                </select>
              </div>
            </div>
          </div>
          <p className="convert">Convert In</p>
          <select className="convert-box">
            <option>Fahrenheit</option>
            <option>Celcius</option>
          </select>

          <button className="button">Convert</button>
        </div>

        <div className="answer">
          <span>32</span>
          <div>
            <sup>o</sup>
            <sup>F</sup>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
