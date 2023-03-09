/**
 * Component that export the Setup documentation of the project.
 * @returns a JSX.Element.
 */
export default function Troubleshoot() {
  return (
    <>
      <section>
        <h2 className="text-2xl text-center font-bold">Troubleshoot</h2>
        <article className="p-2 my-3 mx-auto rounded-xl bg-black/20 max-w-3xl">
          <h3 className="text-xl m-2">The robot is not acting normally</h3>
          <p>
            Try resetting it by pressing the reset button around one second. If the solution does not work, try reuploading the code in the robot.
          </p>
        </article>
        <article className="p-2 my-3 mx-auto rounded-xl bg-black/20 max-w-3xl">
          <h3 className="text-xl m-2">The server is not connecting to the robot</h3>
          <p>
            In that case, you can try to restart the server by pressing CTRL+C in the terminal running the server then starting it again.
          </p>
        </article>
        <article className="p-2 my-3 mx-auto rounded-xl bg-black/20 max-w-3xl">
          <h3 className="text-xl m-2">The server is not connecting to the robot even if the robot is plugged</h3>
          <p>
            In order to successfully connect to the Arduino robot it should not be connected to the same computer running the server.
          </p>
        </article>
      </section>
    </>
  );
}
