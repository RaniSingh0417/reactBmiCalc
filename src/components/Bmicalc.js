import { useState } from "react";

const BmiCalculator = () => {
  const [height, setheight] = useState(10);
  const [weight, setweight] = useState(5);
  const [bmi, setbmi] = useState("");
  const [reaction, setrection] = useState("");
  const [bmistatus, setbmistatus] = useState("");
  //   const [backgroundColor, setBackgroundColor] = useState("lightpink");
  //   const [textColor, setTextColor] = useState("white");

  const onHeightChange = (e) => {
    const inputHeight = Number(e.target.value);
    setheight(inputHeight);
  };
  const onWeightChange = (e) => {
    const inputWeight = Number(e.target.value);
    setweight(inputWeight);
  };
  const calculateBmi = () => {
    let bmiResult = (weight / (height / 100) ** 2).toFixed(3);
    setbmi(bmiResult);
    setbmistatus(getBmiStatus(bmiResult));
    setrection(getBmiReaction(bmiResult));
    // changeColor();
  };
  const getBmiStatus = (bmi) => {
    if (bmi < 18.5) {
      return "UNDERWEIGHT";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      return "NORMAL";
    } else if (bmi >= 25 && bmi < 29.9) {
      return "OVERWEIGHT";
    } else {
      return "OBESE";
    }
  };
  const getBmiReaction = (bmi) => {
    if (bmi < 18.5) {
      return "😞Uhhhhhh";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      return "😊Yayyyyyy";
    } else if (bmi >= 25 && bmi < 29.9) {
      return "😲Offffooo";
    } else {
      return "☹️Do Exercise";
    }
  };

  //   const changeColor = () => {
  //     if (bmi < 18.5) {
  //       setBackgroundColor("yellow");
  //       setTextColor("brown");
  //     } else if (bmi >= 18.5 && bmi < 24.9) {
  //       setBackgroundColor("green");
  //       setTextColor("white");
  //     } else if (bmi >= 25 && bmi < 29.9) {
  //       setBackgroundColor("red");
  //       setTextColor("white");
  //     } else {
  //       setBackgroundColor("red");
  //       setTextColor("white");
  //     }
  //   };

  return (
    <>
      <div className="bmi">
        <h1>BMI CALCULATOR</h1>
        <h3>HEIGHT:{height}cm</h3>
        <input
          className="input-slider"
          type="range"
          step="1"
          min="10"
          max="210"
          onChange={onHeightChange}
        ></input>

        <h3>WEIGHT:{weight}kg</h3>
        <input
          className="input-slider"
          type="range"
          step=".5"
          min="10"
          max="110"
          onChange={onWeightChange}
        ></input>
        <br />
        <button className="btn" onClick={() => calculateBmi()}>
          CALCULATE BMI
        </button>
        <div
          className="changeColor"
          //   style={{ color: { textColor }, background: { backgroundColor } }}
        >
          <h3>YOUR BMI IS {bmi}</h3>
          <h3>
            {reaction}!You are {bmistatus}
          </h3>
        </div>
      </div>
    </>
  );
};
export default BmiCalculator;
