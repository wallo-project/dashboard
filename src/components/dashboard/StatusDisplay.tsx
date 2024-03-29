/**
 * Component that export the status display of the dashboard.
 * 
 * @author WALL-O Dev Team
 * @version 1.0.0
 * @since 01/01/2023
 */

// import required elements
import React from "react";

// Props (arguments) passed to the component when mounting it
interface Props {
    data: {
        time: string,
        running: number,
        distance: number,
        left: number,
        front: number,
        right: number, 
        lineDetection: number,
        lineDetectionSensors: number
        commandResponse: number
    }
}

// creating a React Functional Component
const StatusDisplay: React.FC<Props> = (props) => {

  return (
    <div className="bg-black/20 rounded-xl mx-10">
      <h3 className="text-2xl">Status</h3>
      <table className="text-left mx-auto m-5">
        <tbody>
            <tr className={(props.data.running !== -1)? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}>
              <th className="m-2">WALL-O Connection</th>
              <td className="px-5 font-bold">{(props.data.running !== -1)? "Connected" : "Disconnected"}</td>
            </tr>
            <tr className={(props.data.running === 1)? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}>
              <th className="m-2">Running</th>
              <td className="px-5 font-bold">{(props.data.running === 1)? "Yes" : "No"}</td>
            </tr>
            <tr className={(props.data.lineDetectionSensors === 1)? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}>
              <th className="m-2">Line sensors</th>
              <td className="px-5 font-bold">{(props.data.lineDetectionSensors === 1)? "Enabled" : "Disabled"}</td>
            </tr>
            <tr className={(props.data.lineDetection === 1)? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}>
              <th className="m-2">Detecting line</th>
              <td className="px-5 font-bold">{(props.data.lineDetection === 1)? "Yes" : "No"}</td>
            </tr>
            <tr className={(props.data.commandResponse === 1)? "text-green-600 dark:text-green-400" : "text-blue-600 dark:text-blue-400"}>
              <th className="m-2">Command Response</th>
              <td className="px-5 font-bold">{(props.data.commandResponse === 1)? "Confirmed" : "Waiting"}</td>
            </tr>

            <tr className="p-10">
              <th className="m-2">Distance From Obstacle</th>
              <td className="px-5 font-bold">{props.data.distance}</td>
            </tr>
            <tr className="p-10">
              <th className="m-2">Distance From Obstacle LEFT</th>
              <td className="px-5 font-bold">{props.data.left}</td>
            </tr>
            <tr className="p-10">
              <th className="m-2">Distance From Obstacle RIGHT</th>
              <td className="px-5 font-bold">{props.data.right}</td>
            </tr>

            <tr className="p-10">
              <th className="m-2">Data fetch time</th>
              <td className="px-5 font-bold">{props.data.time.substring(11, 19)}</td>
            </tr>
        </tbody>
      </table>
    </div>
    )
}

// export the component
export default StatusDisplay