/**
 * Component that export the component to control the robot.
 * 
 * @author WALL-O Dev Team
 * @version 1.0.0
 * @since 01/01/2023
 */

// import required elements
import axios from "axios";
import { useState } from "react";
import { getApiAddress, isConnected } from "../../store/apiSlice";
import { useAppSelector } from "../../store/hooks";

/**
 * Function that return the command component
 * 
 * @returns JSX.Element.
 */
export default function Commands() {
  // app selector is used to fetch data from the store
  const apiAddress = useAppSelector(getApiAddress);
  const connected = useAppSelector(isConnected);

  // using the useState function to sync data through the component
  const [active, setActive] = useState(false);
  const [activeSensors, setActiveSensors] = useState(true);

  // function to send a command to the API
  const sendCommand = (command: string) => {
    axios.get(`${apiAddress}/command/${command}`);
  };

  // function executed on button click to start or stop wall-o
  const activeButtonClick = () => {
    if (!connected) {
      return;
    }
    if (!active) {
      // call api for start
      setActive(true);
      sendCommand("start");
    } else {
      // call api for stop
      setActive(false);
      sendCommand("stop");
    }
  };

  // function executed on button click to enable or disable line tracking sensors
  const activeSensorsClick = () => {
    if (!connected) {
      return;
    }
    if (!activeSensors) {
      // call api to enable sensors
      setActiveSensors(true);
      sendCommand("enable-line-track");
    } else {
      // call api for stop
      setActiveSensors(false);
      sendCommand("disable-line-track");
    }
  };

  // action done on download button click
  const downloadRoute = `${apiAddress}/report`;

  return (
    <>
      <article className="object-center mt-5 px-10 mx-auto bg-black/30 rounded-xl h-full w-full">
        <h3 className="text-xl p-5">Control Panel</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 space-x-2">
          <button
            className={
              !active
                ? "block text-center object-center mx-auto my-3 p-3 rounded-xl bg-green-300 dark:bg-green-600 hover:bg-green-200 dark:hover:bg-green-700 w-full duration-300"
                : "block text-center object-center mx-auto my-3 p-3 rounded-xl bg-orange-300 dark:bg-orange-600 hover:bg-orange-200 dark:hover:bg-orange-800 w-full duration-300"
            }
            onClick={activeButtonClick}
          >
            {active ? "Stop" : "Start"}
          </button>
          <button
            className={
              !activeSensors
                ? "block text-center object-center mx-auto my-3 p-3 rounded-xl bg-green-300 dark:bg-green-600 hover:bg-green-200 dark:hover:bg-green-700 w-full duration-300"
                : "block text-center object-center mx-auto my-3 p-3 rounded-xl bg-orange-300 dark:bg-orange-600 hover:bg-orange-200 dark:hover:bg-orange-800 w-full duration-300"
            }
            onClick={activeSensorsClick}
          >
            {activeSensors ? "Disable line tracking" : "Enable line tracking"}
          </button>
          <a
            className="block text-center object-center md:col-span-2 my-3 p-3 rounded-xl bg-blue-300 dark:bg-blue-700 hover:bg-blue-200 dark:hover:bg-blue-800 w-full duration-300"
            href={connected? downloadRoute : "#"}
          >
            Download Data
          </a>
        </div>
      </article>
    </>
  );
}
