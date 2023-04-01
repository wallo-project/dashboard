/**
 * Component that contain a title and an image of the robot.
 * 
 * @author WALL-O Dev Team
 * @version 1.0.0
 * @since 01/01/2023
 */

/**
 * Function that export the presentation of the robot.
 * 
 * @return a JSX.Element.
 */
export default function Presentation() {
  return (
    <section className="text-center text-black dark:text-white">
      <h2 className="text-3xl font-semibold p-10">
        An Autonomous Vehicle Project
      </h2>
      <img
        src="./img/wallo.png"
        alt="WALL-O"
        className="object-center m-auto"
      />
    </section>
  );
}
