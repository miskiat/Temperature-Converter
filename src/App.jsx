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

              <div className="degree-boxx border-l-2 pl-3">
                <sup>o</sup>

                <select>
                  <option>C</option>
                  <option>F</option>
                  <option>K</option>
                </select>
              </div>
            </div>
          </div>
          <p className="convert">Convert In</p>
          <select className="convert-box">
            <option>Fahrenheit</option>
            <option>Celcius</option>
            <option>Kelvin</option>
          </select>

          <button className="button">
            Convert
            <img src="/public/arrow.svg" />
          </button>
        </div>

        <div className="answer">
          <span>32</span>
          <div className="measurement">
            <sup className="subscript text-sm">o</sup>
            <sup className="subscript text-3xl pt-2 ">F</sup>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
