import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState("");

  const calculateBMI = () => {
    let heightMeters = height / 100;
    let bmi = weight / (heightMeters * heightMeters);
    let bmiCategory = "";

    if (bmi < 18.5) {
      bmiCategory = "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      bmiCategory = "Normal weight";
    } else if (bmi >= 25 && bmi <= 29.9) {
      bmiCategory = "Overweight";
    } else {
      bmiCategory = "Obesity";
    }

    setResult(`${bmi.toFixed(2)} - ${bmiCategory}`);
  };

  const handleCalculate = (event) => {
    event.preventDefault();

    if (!height || !weight) {
      alert("Please fill all inputs properly!");
      return;
    }

    if (isNaN(height) || isNaN(weight)) {
      alert("Height and Weight should be a number");
      return;
    }

    if (height <= 0 || weight <= 0) {
      alert("Height and Weight should be greater than 0");
      return;
    }

    if (String(height).toLowerCase().includes('e') || String(weight).toLowerCase().includes('e')) {
      alert("Invalid input: 'e' not allowed");
      return;
    }

    calculateBMI();
  };

  return (
    <div id="app">
      <div className="container">
        <h1>Calculate BMI</h1>
        <form>
          <div>
            <label htmlFor="height">Height:</label>
            <input
              id="height"
              type="number"
              className="form-control"
              placeholder="Cm"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="weight">Weight:</label>
            <input
              id="weight"
              type="number"
              className="form-control"
              placeholder="Kg"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>

          <button className="btn btn-success w-100" onClick={handleCalculate}>
            Calculate
          </button>
        </form>

        {result && <p id="result">{result}</p>}
      </div>
    </div>
  );
};

export default App;
