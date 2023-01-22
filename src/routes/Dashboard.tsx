import { useRef /*, useState*/ } from "react";

import Header from "../components/header/Header";

import ChartLine from "../components/dashboard/charts/ChartLine";
import ChartRadar from "../components/dashboard/charts/ChartRadar";
import Commands from "../components/dashboard/commands/Commands";
import ApiAddressSetup from "../components/dashboard/commands/ApiAddressSetup";
import { isConnected } from "../store/apiSlice";
import { useAppSelector } from "../store/hooks";


const data = [
  {
    time: 0,
    speed: 0,
    angle: 0,
  },
  {
    time: 1,
    speed: 0.15,
    angle: 0,
  },
  {
    time: 2,
    speed: .3,
    angle: 0,
  },
  {
    time: 3,
    speed: .28,
    angle: 1,
  },
  {
    time: 4,
    speed: .3,
    angle: 2,
  },
  {
    time: 5,
    speed: .3,
    angle: 2,
  },
  {
    time: 6,
    speed: .3,
    angle: 1,
  },
];

const dataRadar = [
  {
    area: "front",
    distance: 200,
  },
  {
    area: "front right",
    distance: 200,
  },
  {
    area: "right",
    distance: 200,
  },
  {
    area: "back right",
    distance: 0,
  },
  {
    area: "back",
    distance: 0
  },
  {
    area: "back left",
    distance: 0
  },
  {
    area: "left",
    distance: 200,
  },
  {
    area: "front left",
    distance: 170,
  },
];

export default function Dashboard() {

  const connected = useAppSelector(isConnected);

  const speedChartLine = useRef<ChartLine>(null);
  const angleChartLine = useRef<ChartLine>(null);
  const obstacleChartRadar = useRef<ChartRadar>(null);

  //const updateSpeedChart = (time: number, value: number) => {
  //  if (speedChartLine.current) {
  //    speedChartLine.current.updateChart({ time: time, value: value});
  //  }
  //};
//
  //const updateAngleChart = (time: number, value: number) => {
  //  if (angleChartLine.current) {
  //    angleChartLine.current.updateChart({ time: time, value: value});
  //  }
  //};
//
  //const updateObstacleChart = (domain: string, distance: number) => {
  //  if (obstacleChartRadar.current) {
  //    obstacleChartRadar.current.updateChart(domain, distance);
  //  }
  //};


  return (
    <>
      <div className="min-h-screen text-black dark:text-white">
        <Header title="Dashboard- Work In Progress" />
        { !connected && <ApiAddressSetup /> }
        <main className={connected? "w-full min-h-screen" : "w-full min-h-screen blur"}>
          <section className="mx-4">
            <h2 className="text-center text-3xl pb-2">Telemetry</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 object-center text-center align-center mx-auto">
              <ChartLine ref={speedChartLine} data={data} name="Speed (cm*s^-1)" dataKey="speed" width={400} height={300} enableGrid={true} />
              <ChartLine ref={angleChartLine} data={data} name="Angle (°)" dataKey="angle" width={400} height={300} strokeColor="#00FF00" enableGrid={true} />
              <ChartRadar ref={obstacleChartRadar} data={dataRadar} axisKey={"area"} dataKey={"distance"} legend={"Distance from obstacle (cm)"} strokeColor={"#5555FF"} fillColor={"#0000CC"}  />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 object-center text-center align-center mx-auto">
              <div></div>
              <Commands />
            </div>
          </section>
          
        </main>
      </div>
    </>
  );
}
