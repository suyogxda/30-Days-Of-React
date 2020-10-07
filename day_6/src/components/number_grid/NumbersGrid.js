import React from "react";
import "./NumbersGrid.css";
import { isPrime } from "../../utils/Utils";
import ColorBlock from "../color_block/ColorBlock";

const getNumberJsxArray = (numberList) => {
  let bgColor = { backgroundColor: "#21bf73", fontWeight: "normal" };
  let mappedHsxArray = numberList.map((i, n) => {
    if (isPrime(i)) {
      bgColor = { backgroundColor: "#fd5e53", fontWeight: "normal" };
    } else if (i % 2 === 0) {
      bgColor = { backgroundColor: "#21bf73", fontWeight: "normal" };
    } else {
      bgColor = { backgroundColor: "#fddb3a", fontWeight: "normal" };
    }
    return (
      <ColorBlock
        key={n}
        divStyle={bgColor}
        textStyle={{ fontWeight: "normal" }}
        textInBox={i}
      />
    );
  });
  return mappedHsxArray;
};

const NumbersGrid = (props) => {
  let numbersArray = getNumberJsxArray(props.numberList);
  return (
    <div className="number_grid_outer_div">
      <div className="number_grid_text_div">
        <h1>30 Days Of React</h1>
        <h2 style={{ fontWeight: "normal" }}>Number Generator</h2>
        <div className="number_grid_inner_div">{numbersArray}</div>
      </div>
    </div>
  );
};

export default NumbersGrid;
