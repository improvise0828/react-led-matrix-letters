import { useState, useEffect } from "react";
import styled from "styled-components";
import ledLetters from "./ledletters";

const LEDoff = styled.div`
  margin: 0.2rem;
  width: 1rem;
  height: 1rem;
  outline: none;
  border: none;
  background: #f3f6f7;
  box-shadow: inset 0 0 0 -20px gray, 0 0 3px gray, 0 0 6px gray;
  z-index: 0;
`;
const LEDon = styled.div`
  margin: 0.2rem;
  width: 1rem;
  height: 1rem;
  outline: none;
  border: none;
  background: #f3f6f7;
  box-shadow: inset 0 0 13px 1px #0000f6, 0 0 1px blue, 0 0 6px blue,
    0 0 9px #fff, 0 0 12px blue, 0 0 13px blue;
  z-index: 1;
`;

const LetterBox = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1.4rem);
`;

const Container = styled.div`
  display: inline-flex;
  flex-flow: row nowrap;
`;

const LedDisplay = ({ input = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890?!" }) => {
  const [toDisplay, setToDisplay] = useState([]);
  useEffect(() => {
    const arrLetters = input.split("");
    setToDisplay(arrLetters);
  }, [input]);
  const createMatrix = (word) => {
    const matrix = [];
    if (ledLetters[word] === undefined) {
      return matrix;
    } else {
      ledLetters[word].forEach((row, rIdx) => {
        row.forEach((value, vIdx) => {
          if (value === 1) matrix.push(<LEDon key={`${rIdx}${vIdx}`} />);
          else matrix.push(<LEDoff key={`${rIdx}${vIdx}`} />);
        });
      });
      return matrix;
    }
  };
  return (
    <Container>
      {toDisplay.map((el, idx) => (
        <LetterBox key={`${idx}box`}>{createMatrix(el)}</LetterBox>
      ))}
    </Container>
  );
};

export default LedDisplay;
