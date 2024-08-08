import { useEffect, useState } from "react";


//   useEffect(() => {
//     //Runs on every render
//   });

// useEffect(() => {
//     //Runs only on the first render
//   }, []);

//   useEffect(() => {
//     //Runs on the first render
//     //And any time any dependency value changes
//   }, [prop, state]);

export default function Hookuseeffect() 
{
  const [price, setPrice] = useState(0);
  const [calculateRate, setCalculateRate] = useState(0);

  useEffect(() => 
  {
    console.log("Useeffect called..");
    setCalculateRate(() => price * 20);
  }, [price]);

  return (
    <div>
      <input type="button" onClick={() => 
      setPrice((prv) => prv + 20)} value="ChangePrice"/>
      <h2>Price :{price}</h2>
      <h3>Calcuated Rate: {calculateRate}</h3>
    </div>
  );
}