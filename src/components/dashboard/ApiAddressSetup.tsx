import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { apiActions } from "../../store/apiSlice";

export default function ApiAddressSetup() {
  const dispatch = useDispatch();


  const labelClasses: string = "block m-2";
  const inputClasses: string =
    "block object-center mx-auto p-2 m-2 w-44 bg-gray-300 dark:bg-gray-600 rounded-xl";

  const [ipValue, setIpValue] = useState("localhost");
  const [portValue, setPortValue] = useState("8080");
  const [message, setMessage] = useState("");
  const [error, setErrorStatus] = useState(false);

  const handleIpChange = (event: any) => {
    setIpValue(event.target.value);
  };

  const handlePortChange = (event: any) => {
    setPortValue(event.target.value);
  };

  const handleApiConfig = (e: any) => {
    e.preventDefault()
    setErrorStatus(false);
    setMessage("Loading...")
    try {
      axios
        .get(`http://${ipValue}:${portValue}/healthcheck`)
        .then((response: any) => {
          if (response.data.status === "OK") {
            dispatch(
              apiActions.setApiAddress({
                ipAddress: ipValue,
                port: portValue,
              })
            );
            dispatch(apiActions.setConnectionStatus(true));
          }
        })
        .catch((e) => {
            setErrorStatus(true);
          setMessage("Error: Could not establish connection with the API");
        });
    } catch (e) {
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
