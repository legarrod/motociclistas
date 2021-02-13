import "./App.css";
import Cell from "./components/Cell/index";
import SelectHours from './components/SelectHours/index'
import { useEffect, useState } from "react";


function App() {
 
  const startTime = "";
  const finalHour = "";
  const minutesHour = 60;
  const minutesInterval = 30;
  const [count, setCount] = useState(8);

  const finalH = 25;
  const finalM = 56;

  const createHours = () => {
    let hour = 0;
    let hourArray = [];
    for (let i = 0; i < finalH; i++) {
      if ((hour = i)) {
        hourArray.push(i - 1);
      }
      hour = i;
    }
    return hourArray;
  };

  const createMinutes = () => {
    let minutes = 0;
    let minutesArray = [];
    let control = 0;
    for (let i = 0; i < finalM; i = i + 5) {
      if ((minutes = i)) {
        minutesArray.push(control);
        control += 5;
      }
      minutes = i;
    }
    return minutesArray;
  };

  useEffect(() => {
    //createMinutes();
    //createHours();
  }, []);

  const horas = [{value:"8:30", select: false}, {value:"9:00", select: false}, {value:"9:30", select: false}, {value:"10:00", select: false}, {value:"10:30", select: false}];
  return (
    <div className="container mx-auto h-full w-full">
      <h1 className="text-3xl">Motos</h1>
      <h1>Disponibles {count}</h1>
      {/* <div className="flex flex-row">
        <div className="mx-3">
          <p>Hora inicio</p>
         <SelectHours createHours={createHours} createMinutes={createMinutes}/>
        </div>
        <div className="mx-3 ml-10">
          <p>Hora final</p>
         <SelectHours createHours={createHours} createMinutes={createMinutes}/>
        </div>
      </div> */}

      <Cell horas={horas} setCount={setCount} count={count}/>
    </div>
  );
}

export default App;
