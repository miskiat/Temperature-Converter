import "./App.css";

function App() {
  return (
    <div className="">
      <div className="container">
        <h1 className="enter">Enter Temperature</h1>
        <div className="">
          <h2 className="degree">Degree</h2>
          <span>0</span>
          <sup>o</sup>
          <span>C</span>
          <select>
            <option>F</option>
          </select>
        </div>
        <div className="">
          <h2 className="convert">Convert In</h2>
          <p>Fahrenheit(F)</p>
          <select>
            <option></option>
          </select>
          <button>Convert </button>
        </div>
        <div className="answer">
          <span>32</span>
          <sup>o</sup>
        </div>
      </div>
    </div>
  );
}

export default App;
