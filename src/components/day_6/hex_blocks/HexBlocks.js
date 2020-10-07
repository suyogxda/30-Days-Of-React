import React from "react";
import "./HexBlocks.css";
import { isDark } from "../../../utils/Utils";

const mapHexCodes = (hexCode) => {
  let mappedHexCodes = hexCode.map((i, n) => {
    let bgColor = { backgroundColor: i, fontWeight: "normal" };
    let numberElement = isDark(i) ? (
      <p style={{ fontWeight: "normal" }}>{i}</p>
    ) : (
      <p style={{ fontWeight: "normal", color: "black" }}>{i}</p>
    );
    return (
      <div key={n} style={bgColor} className="number_block">
        {numberElement}
      </div>
    );
  });
  return mappedHexCodes;
};

const HexBlocks = (props) => {
  let numbersArray = mapHexCodes(props.hexCode);
  return (
    <div className="number_grid_outer_div">
      <div className="number_grid_text_div">
        <h1>30 Days Of React</h1>
        <h2 style={{ fontWeight: "lighter" }}>Hexadecimal Colors</h2>
        <div className="number_grid_inner_div">{numbersArray}</div>
      </div>
    </div>
  );
};

export default HexBlocks;
