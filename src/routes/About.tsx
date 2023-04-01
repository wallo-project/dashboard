/**
 * Component that export the About page.
 * 
 * @author WALL-O Dev Team
 * @version 1.0.0
 * @since 01/01/2023
 */

// import required elements
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Link } from "react-router-dom";

/**
 * Function that returns the about page.
 * 
 * @returns JSX.Element.
 */
export default function About() {
  return (
    <>
      <div className="min-h-screen text-black dark:text-white pb-5 bg-gradient-to-b from-gray-100 dark:from-gray-900 via-orange-200 dark:via-orange-700 to-gray-100 dark:to-gray-900">
        <Header title="About" />
        <main className="m-5">
          <section>
            <h2 className="text-2xl text-center font-bold">WALL-O Project Presentation</h2>
            <img src="/img/wallo.png" alt="wall-o" className="mx-auto object-center" />
            <article className="p-2 my-3 mx-auto rounded-xl bg-black/20 max-w-3xl">
              <h3 className="text-center text-xl font-bold m-3">The team</h3>
              <p>This project is made by four students :</p>
              <ul className="list-disc ml-5">
                <li><a className="underline" href="https://github.com/MicheloXy">Maxime A</a></li>
                <li><a className="underline" href="https://github.com/Skodaa">Alex V</a></li>
                <li><a className="underline" href="https://github.com/FalTeaK">Matthieu V</a></li>
                <li><a className="underline" href="https://github.com/benjaminpmd">Benjamin P</a></li>
              </ul>
            </article>
            <article className="p-2 my-3 mx-auto rounded-xl bg-black/20 max-w-3xl">
              <h3 className="text-center text-xl font-bold m-3">What is this project</h3>
                <p>WALL-O is a small robot able to track lines and avoid obstacles. The robot can be controlled via this web application. In order to use the robot, a server is needed, it will act as a bridge between the robot connection and the web application. The connection between the robot and the server uses a Bluetooth connection.</p>
            </article>
            <article className="p-2 my-3 mx-auto rounded-xl bg-black/20 max-w-3xl">
              <h3 className="text-center text-xl font-bold m-3">How to setup the robot?</h3>
                <p>The configuration of WALL-O is very simple. A complete guide is available on <Link className="underline" to={"/docs"}>this page</Link>. You can also find a configuration tutorial on each dedicated repository of the project.</p>
            </article>
            <article className="p-2 my-3 mx-auto rounded-xl bg-black/20 max-w-3xl">
              <h3 className="text-center text-xl font-bold m-3">Organization</h3>
                <p>The project is divided in three parts. each one have a dedicated repository:</p>
                <ul className="list-disc ml-5">
                  <li>The script executed by the robot. The code is available <a className="underline" href="https://github.com/wallo-project/robot">here</a>.</li>
                  <li>The server that collect informations from the robot and serve them to the REST API. The code is available <a className="underline" href="https://github.com/wallo-project/server">here</a>.</li>
                  <li>This dashboard that allow the control of the robot and visualization of its parameters in real time. The code is available <a className="underline" href="https://github.com/wallo-project/dashboard">here</a>.</li>
                </ul>
                <p>You can find more informations about each part in their own repository as well as a tutorial on how to configure them.</p>
            </article>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}