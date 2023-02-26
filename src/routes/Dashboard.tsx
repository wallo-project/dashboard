import Header from "../components/header/Header";
import Commands from "../components/dashboard/Commands";
import ApiAddressSetup from "../components/dashboard/ApiAddressSetup";
import { getApiAddress, isConnected } from "../store/apiSlice";
import { useAppSelector } from "../store/hooks";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useEffect, useState } from "react";
import StatusDisplay from "../components/dashboard/StatusDisplay";

export default function Dashboard() {
  const connected = useAppSelector(isConnected);
  const apiAddress = useAppSelector(getApiAddress);

  const [distanceData, setDistanceData] = useState<{ time: string; value: number }[]>([]);
  const [radarData, setRadarData] = useState<{ area: string, value: number }[]>([]);
  const [statusData, setStatusData] = useState<any>({
    time: "None",
    running: -1,
    distance: -1,
    left: -1,
    front: -1,
    right: -1,
    lineDetection: -1,
    commandResponse: -1,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newDistanceData = [...distanceData];

      if (connected) {
        fetch(`${apiAddress}/latest-data`).then((response) => {

          response.json().then((data) => {

            if (newDistanceData.length > 50) {
              newDistanceData.shift();
            }
            newDistanceData.push({
              time: data.time.substring(11, 19),
              value: data.distance,
            });

            const newRadarData = [
              { area: "front", value: data.front },
              { area: "front left", value: data.left },
              { area: "back left", value: 0 },
              { area: "back", value: 0 },
              { area: "back right", value: 0 },
              { area: "front right", value: data.right },
              
            ]

            setDistanceData(newDistanceData);

            setRadarData(newRadarData);

            setStatusData(data);
          });
        });
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [distanceData, apiAddress, radarData, connected, statusData]);

  return (
    <>
      <div className="min-h-screen text-black dark:text-white">
        <Header title="Dashboard" />
        {!connected && <ApiAddressSetup />}
        <main
          className={
            connected ? "w-full min-h-screen" : "w-full min-h-screen blur"
          }
        >
          <section className="mx-4">
            <h2 className="text-center text-3xl pb-2">WALL-O Telemetry</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 object-center text-center align-center mx-auto">
              <LineChart width={500} height={300} data={distanceData}>
                <CartesianGrid strokeDasharray="3 3" color="#101010" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="value"
                  name="Distance measured (cm)"
                  stroke="#FF0000"
                  strokeWidth={3}
                  dot={false}
                  animationDuration={0}
                />
              </LineChart>

              <RadarChart width={500} height={300} data={radarData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="area" />
                <PolarRadiusAxis angle={0} domain={[0, 40]} />
                <Radar
                  name="Distance"
                  dataKey="value"
                  stroke="#8884d8"
                  fill="#8884d8"
                  fillOpacity={0.6}
                  animationDuration={1}
                />
                <Legend />
              </RadarChart>
              <StatusDisplay data={statusData} />
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
