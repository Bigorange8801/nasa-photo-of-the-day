import React from "react";

function Card(props) {
  console.log(" Card props", props);
  const info = props.data;
  // console.log("info", info);
  return (
    <div>
      <div>
        <h4>date:</h4>
        <p>{info.date} </p>
      </div>
      <div>
        <h4>Explanation:</h4>
        <p>{info.explanation}</p>
      </div>
      <div>
        <h4>Picture By:</h4>
        <p>{info.copyright}</p>
      </div>
      <img src={info.url} alt="nasa picture of the day " />
    </div>
  );
}

export default Card;