import React, { useRef, useState } from "react";
import Xarrow from "react-xarrows";
const boxStyle = {
  border: "grey solid 2px",
  borderRadius: "10px",
  padding: "5px",
  color: "white",
  cursor: "pointer",
};
// Default line drawn
// const LineDraw = () => {
//   const box1Ref = useRef(null);
//   return (
//     <div
//       style={{ display: "flex", justifyContent: "space-evenly", width: "100%" }}
//     >
//       <div ref={box1Ref} style={boxStyle}>
//         hey
//       </div>
//       <p id="elem2" style={boxStyle}>
//         hey2
//       </p>
//       <Xarrow
//         start={box1Ref} //can be react ref
//         end="elem2" //or an id
//       />
//     </div>
//   );
// };

// ******** line x to y || y to x
const LineDraw = () => {
  const [start, setStart] = useState(null);
  const box1Ref = useRef(null);
  const box2Ref = useRef(null);

  const handleBoxClick = (ref) => {
    if (!start) {
      setStart(ref.current); // Set the start ref on the first click
    } else {
      const end = ref.current;
      const line = { start, end };
      // Add the line to a list or perform the desired action
      console.log("Line drawn:", line);
      setStart(null); // Reset the start ref for future drawings
    }
  };

  return (
    <div
      style={{ display: "flex", justifyContent: "space-evenly", width: "100%" }}
    >
      <div
        ref={box1Ref}
        style={boxStyle}
        onClick={() => handleBoxClick(box1Ref)}
      >
        hey
      </div>
      <p ref={box2Ref} style={boxStyle} onClick={() => handleBoxClick(box2Ref)}>
        hey2
      </p>
      {start && <Xarrow start={start} end={box2Ref.current} />}
    </div>
  );
};

// *************
// const LineDraw = () => {
//   const [start, setStart] = useState(null);
//   const [lines, setLines] = useState([]);

//   const boxRefs = [useRef(null), useRef(null)];

//   const handleBoxClick = (index) => {
//     if (!start) {
//       setStart(boxRefs[index].current);
//     } else {
//       const end = boxRefs[index].current;
//       const line = { start, end };
//       setLines([...lines, line]);
//       setStart(null);
//     }
//   };

//   return (
//     <div
//       style={{ display: "flex", justifyContent: "space-evenly", width: "100%" }}
//     >
//       <div ref={boxRefs[0]} style={boxStyle} onClick={() => handleBoxClick(0)}>
//         hey
//       </div>
//       <p ref={boxRefs[1]} style={boxStyle} onClick={() => handleBoxClick(1)}>
//         hey2
//       </p>
//       {lines.map((line, index) => (
//         <Xarrow key={index} start={line.start} end={line.end} />
//       ))}
//     </div>
//   );
// };

// const LineDraw = () => {
//   const [start, setStart] = useState(null);
//   const [lines, setLines] = useState([]);

//   const boxRefs = [useRef(null), useRef(null)];

//   const handleBoxClick = (index) => {
//     if (!start) {
//       setStart(index);
//     } else {
//       const end = index;
//       const line = { start, end };
//       setLines([...lines, line]);
//       setStart(null);
//     }
//   };

//   return (
//     <div
//       style={{ display: "flex", justifyContent: "space-evenly", width: "100%" }}
//     >
//       <div ref={boxRefs[0]} style={boxStyle} onClick={() => handleBoxClick(0)}>
//         hey
//       </div>
//       <p ref={boxRefs[1]} style={boxStyle} onClick={() => handleBoxClick(1)}>
//         hey2
//       </p>
//       {lines.map((line, index) => (
//         <Xarrow
//           key={index}
//           start={boxRefs[line.start].current}
//           end={boxRefs[line.end].current}
//         />
//       ))}
//     </div>
//   );
// };

export default LineDraw;
