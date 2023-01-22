import { useState } from "react"

export default function Commands() {
    const [active, setActive] = useState(false);

    const activeButtonClick = () => {
        if (!active) {
            // call api for start
            setActive(true);
        }
        else {
            // call api for stop
            setActive(false);
        }
    }
    return (
        <>
            <article className="object-center mt-5 px-10 mx-auto bg-black/30 rounded-xl h-full w-full">
                <h3 className="text-xl p-5">Control Panel</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 space-x-2">
                    <div>
                        <button className={!active? "block text-center object-center mx-auto my-3 p-3 rounded-xl bg-green-300 dark:bg-green-600 hover:bg-green-200 dark:hover:bg-green-700 w-full duration-300" : "block text-center object-center mx-auto my-3 p-3 rounded-xl bg-orange-300 dark:bg-orange-600 hover:bg-orange-200 dark:hover:bg-orange-800 w-full duration-300"} onClick={activeButtonClick}>{active? "Stop" : "Start"}</button>
                        <button className="block text-center object-center mx-auto my-3 p-3 rounded-xl bg-red-500 hover:bg-red-600 w-full duration-300">Emergency Stop</button>
                        <button className="block text-center object-center mx-auto my-3 p-3 rounded-xl bg-blue-300 dark:bg-blue-700 hover:bg-blue-200 dark:hover:bg-blue-800 w-full duration-300">Download Data</button>
                    </div>
                    <div></div>
                    <div>
                        <button className="block text-center object-center mx-auto my-3 p-3 rounded-xl bg-green-300 dark:bg-green-600 hover:bg-green-200 dark:hover:bg-green-700 w-full duration-300">Increase Speed</button>
                        <button className="block text-center object-center mx-auto my-3 p-3 rounded-xl bg-red-300 dark:bg-red-500 hover:bg-red-200 dark:hover:bg-red-700 w-full duration-300">Decrease Speed</button>
                    </div>
                </div>
            </article>
        </>
    )
}