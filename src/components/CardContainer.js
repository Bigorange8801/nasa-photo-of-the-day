import React, { useState, useEffect } from "react";
import { Button } from 'semantic-ui-react'
import Button from "./Button"

import Header from "./Header";
import Card from "./Card";

import Axios from "axios";

function CardContainer() {
  const [data, setData] = useState("loading....");
  const [date,setDate] = useState("2019-07-15")
  console.log("before/after", data);
  


  useEffect(() => {
    Axios.get(
      `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`
    )
      .then(res => {
        setData(res.data);
      })
      .catch(err => console.log(err));
  }, [date]);

  return (
    <div>
      <h2 size="big">Container</h2>
      <Header data={data} />
      <Card data={data} />
      <button onClick={()=> setDate('2019-07-18')}></button>
    </div>
  );
}

export default CardContainer;