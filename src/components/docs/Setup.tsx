/**
 * Component that contain the setup explanations components.
 * 
 * @author WALL-O Dev Team
 * @version 1.0.0
 * @since 01/01/2023
 */

// import required elements
import { Link } from "react-router-dom";

/**
 * Component that export the Setup documentation of the project.
 * 
 * @returns a JSX.Element.
 */
export default function Setup() {
    return (
      <>
        <section>
          <h2 className="text-2xl text-center font-bold">Robot</h2>
          <article className="p-2 my-3 mx-auto rounded-xl bg-black/20 max-w-3xl">
          <h3 className="text-xl m-2">Initial Start</h3>
          <p>The setup of the robot is very simple. In order to set it up, you need to start it by switching to power button to the position on the right.
            All the instruments will start.
          </p>
          </article>
          <article className="p-2 my-3 mx-auto rounded-xl bg-black/20 max-w-3xl">
            <h3 className="text-xl m-2">Upload Code (Optional)</h3>
            <p>In case you need to re upload the code to the robot, here are the steps to follow.</p>
            <ol className="list-decimal ml-5">
              <li>
                Download the Arduino IDE <a className="underline" href="https://www.arduino.cc/en/software" rel="noreferrer" target="_blank">here</a>.
              </li>
              <li>
                Plug the robot to the computer using the cable.
              </li>
              <li>
                Download the code of the robot <a className="underline" href="https://github.com/wallo-project/robot" rel="noreferrer" target="_blank">here</a>.
              </li>
              <li>
                Open the code in the Arduino IDE.
              </li>
              <li>
                Select Upload on the Arduino IDE.
              </li>
            </ol>
          </article>
        </section>


        <section>
          <h2 className="text-2xl text-center font-bold">Server</h2>
          
            <article className="p-2 my-3 mx-auto rounded-xl bg-black/20 max-w-3xl">
              <h3 className="text-xl m-2">First step</h3>
              <p>You need to pair the Bluetooth device of the robot. In order to do this, go in the Bluetooth setting, add a device, the Bluetooth module of the robot should appear as <b>HC-05</b>. Note that it may take up to one minute for the device to appear in the list.</p>
            </article>

            <article className="p-2 my-3 mx-auto rounded-xl bg-black/20 max-w-3xl">
              <h3 className="text-xl m-2">Automatic Setup</h3>
              <p>The server comes with two setup mods. The first one is automatic and only require to run a script to setup. First download the code of the server <a className="underline" href="https://github.com/wallo-project/server" rel="noreferrer" target="_blank">here</a>.</p>
              <p>If you are using Windows Powershell, use "./setup.ps1" to install all the dependencies. Once done, run the server using "./setup.ps1 -run".</p>
              <p>If you are using Windows Command Prompt, use "./setup.bat" to install all the dependencies. Once done, run the server using "./setup.bat -run".</p>
            </article>
            
            <article className="p-2 my-3 mx-auto rounded-xl bg-black/20 max-w-3xl">
              <h3 className="text-xl m-2">Manual Setup</h3>
              <p>To setup manually the server, please follow the instructions below.</p>
              <ol className="list-decimal ml-5">
                <li>Download the code of the server <a className="underline" href="https://github.com/wallo-project/server" rel="noreferrer" target="_blank">here</a></li>
                <li>Create the python environment using the command "python venv -m .venv" in your terminal. (you need to go in the project directory)</li>
                <li>Activate the python environment using the command "[path of the project]/.venv/Scripts/Activate.ps1/.bat" (Select .ps1 if you are using Windows Powershell, .bat otherwise)</li>
                <li>Install the libraries using "pip install -r requirements.txt"</li>
                <li>Run the server using "python ./src/main.py"</li>
              </ol>
            </article>
        
        </section>

        <section>
          <h2 className="text-2xl text-center font-bold">Dashboard</h2>
            <article className="p-2 my-3 mx-auto rounded-xl bg-black/20 max-w-3xl">
              <h3 className="text-xl m-2">API Setup</h3>
              <p>The dashboard is automatically opened and connected to the API, although if you need to do it manually, just go on <Link className="underline" to="/dashboard">the dashboard page</Link> and set the port on which the API is running.</p>
            </article>
        </section>
      </>
    );
  }
  