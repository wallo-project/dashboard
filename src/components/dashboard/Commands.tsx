import axios from "axios";
import { useState } from "react"
import { getApiAddress } from "../../store/apiSlice";
import { useAppSelector } from "../../store/hooks";

export default function Commands() {
    const apiAddress = useAppSelector(getApiAddress);
    const [active, setActive] = useState(false);

    const sendCommand = (command: string) => {
        axios.get(`${apiAddress}/command/${command}`)
        .then(response => {
            console.log(response.data)
        })
        .catch(e => {
            console.error(e)
        })
    }

    const activeButtonClick = () => {
        if (!active) {
            // call api for start
            setActive(true);
            sendCommand("start")
        }
        else {
            // call api for stop
            setActive(false);
            sendCommand("stop")
        }
    }

    // action done on download button click
    const downloadRoute = `${apiAddress}/report`;

    return (
        <>
            <article className="object-center mt-5 px-10 mx-auto bg-black/30 rounded-xl h-full w-full">
                <h3 className="text-xl p-5">Control Panel</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 space-x-2">
                        <button className={!active? "block text-center object-center mx-auto my-3 p-3 rounded-xl bg-green-300 dark:bg-green-600 hover:bg-green-200 dark:hover:bg-green-700 w-full duration-300" : "block text-center object-center mx-auto my-3 p-3 rounded-xl bg-orange-300 dark:bg-orange-600 hover:bg-orange-200 dark:hover:bg-orange-800 w-full duration-300"} onClick={activeButtonClick}>{active? "Stop" : "Start"}</button>
                        <a className="block text-center object-center mx-auto my-3 p-3 rounded-xl bg-blue-300 dark:bg-blue-700 hover:bg-blue-200 dark:hover:bg-blue-800 w-full duration-300" href={downloadRoute}>Download Data</a>
                </div>
            </article>
        </>
    )
}