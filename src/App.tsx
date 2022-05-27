import React, { useState } from "react";
import "./App.css";
import Buttons from "./elements/button";

function App() {
  let [value, setValue] = useState("");
  return (
    <div className="App">
      <h1 className="App-heading">React Calculator</h1>
      <div className="App-calculator">
        <textarea
          onChange={(e) => {
            setValue(e.target.value);
          }}
          name="textArea"
          value={value}
          className="App-calculator-textArea"
        >
          0
        </textarea>
        <div className="calculator-buttons">
          <Buttons
            classvalue="superSpacial"
            event={() => {
              setValue("");
            }}
            sign="AC"
          />

          <Buttons
            classvalue="firstSpacial"
            event={() => {
              setValue(value.replace(value[value.length - 1], ""));
            }}
            sign="C"
          />
          <Buttons
            classvalue="firstSpacial"
            event={() => {
              setValue((value = value + "%"));
            }}
            sign="%"
          />
          <Buttons
            classvalue="fourth"
            event={() => {
              setValue((value = value + "/"));
            }}
            sign="/"
          />
          <Buttons
            event={() => {
              setValue((value = value + "7"));
            }}
            sign="7"
          />
          <Buttons
            event={() => {
              setValue((value = value + "8"));
            }}
            sign="8"
          />
          <Buttons
            event={() => {
              setValue((value = value + "9"));
            }}
            sign="9"
          />
          <Buttons
            classvalue="fourth"
            event={() => {
              setValue((value = value + "*"));
            }}
            sign="X"
          />
          <Buttons
            event={() => {
              setValue((value = value + "4"));
            }}
            sign="4"
          />
          <Buttons
            event={() => {
              setValue((value = value + "5"));
            }}
            sign="5"
          />
          <Buttons
            event={() => {
              setValue((value = value + "6"));
            }}
            sign="6"
          />
          <Buttons
            classvalue="fourth"
            event={() => {
              setValue((value = value + "-"));
            }}
            sign="-"
          />
          <Buttons
            event={() => {
              setValue((value = value + "1"));
            }}
            sign="1"
          />
          <Buttons
            event={() => {
              setValue((value = value + "2"));
            }}
            sign="2"
          />
          <Buttons
            event={() => {
              setValue((value = value + "3"));
            }}
            sign="3"
          />
          <Buttons
            classvalue="fourth"
            event={() => {
              setValue((value = value + "+"));
            }}
            sign="+"
          />
          <Buttons
            classvalue="SpacialDiv"
            event={() => {
              setValue((value = value + "0"));
            }}
            sign="0"
          />
          <Buttons
            event={() => {
              setValue((value = value + "."));
            }}
            sign="."
          />
          <Buttons
            classvalue="fourth"
            event={() => {
              setValue(eval(value));
            }}
            sign="="
          />
        </div>
      </div>
    </div>
  );
}

export default App;
