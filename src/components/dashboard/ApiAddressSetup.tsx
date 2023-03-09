import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { apiActions } from "../../store/apiSlice";

/**
 * Component that returns the interface to setup the API address.
 * 
 * @returns a JSX.Element
 */
export default function ApiAddressSetup() {
  // use dispatch from the redux store
  const dispatch = useDispatch();

  //  tailwind classes
  const labelClasses: string = "block m-2";
  const inputClasses: string = "block object-center mx-auto p-2 m-2 w-44 bg-gray-300 dark:bg-gray-600 rounded-xl";

  // use state to dynamically update values
  const [ipValue, setIpValue] = useState("localhost");
  const [portValue, setPortValue] = useState("8080");
  const [message, setMessage] = useState("");
  const [error, setErrorStatus] = useState(false);

  // create handlers for input changes
  const handleIpChange = (event: any) => {
    setIpValue(event.target.value);
  };

  const handlePortChange = (event: any) => {
    setPortValue(event.target.value);
  };

  // handle api config (called when the user submit the informations)
  const handleApiConfig = (e: any) => {
    // prevent reload
    e.preventDefault()
    // disable errors
    setErrorStatus(false);
    setMessage("Loading...");
    // try to call the API
    try {
      axios
        .get(`http://${ipValue}:${portValue}/healthcheck`)
        .then((response: any) => {
          if (response.status === 200) {
            // if the response is OK, dispatch the address of the API
            dispatch(
              apiActions.setApiAddress({
                ipAddress: ipValue,
                port: portValue,
              })
            );
            // dispatch the connection as established
            dispatch(apiActions.setConnectionStatus(true));
          }
        })
        .catch((e) => {
            // catch error on API response
            setErrorStatus(true);
            setMessage("Error: Could not establish connection with the API");
        });
    } catch (e) {
        // catch error on API call
        setErrorStatus(true);
      setMessage("Error: Could not establish connection with the API");
    }
  };

  return (
    <>
      <div className="absolute text-center w-full mx-auto scroll-smooth z-40 p-5 duration-300 transition">
        <div className="object-center mx-auto w-min p-5 rounded-xl bg-white/30 dark:bg-black/30">
          <h3 className="text-2xl font-semibold">API Setup</h3>
          <p className={!error? "p-2" : "p-2 text-red-500"}>{message}</p>
          <form onSubmit={handleApiConfig}>
            <label className={labelClasses}>IP Address of the API</label>
            <input
              value={ipValue}
              onChange={handleIpChange}
              type={"text"}
              className={inputClasses}
              placeholder="127.0.0.1"
            />
            <label className={labelClasses}>Port of the API</label>
            <input
              value={portValue}
              onChange={handlePortChange}
              type={"number"}
              className={inputClasses}
              placeholder="8080"
            />
            <input
              type={"submit"}
              className={
                inputClasses +
                " bg-blue-300 hover:bg-blue-200 dark:bg-blue-700 dark:hover:bg-blue-600 duration-300 hover:cursor-pointer"
              }
              value="Connect"
            />
          </form>
        </div>
      </div>
    </>
  );
}
