/**
 * Component that contain the footer of the application.
 * 
 * @author WALL-O Dev Team
 * @version 1.0.0
 * @since 01/01/2023
 */

// import required elements
import { Link } from "react-router-dom";

/**
 * Function that return the footer element.
 * 
 * @returns JSX.Element, the footer of the web application.
 */
export default function Footer() {
  // style of the div containing a list of links
  const divClassName: string = "text-left mt-5";

  // style of the titles contained in the lists
  const titleClassName: string = "font-bold text-xl opacity-70";

  // styles of the links in the lists
  const linkClassName: string = "block md:hover:text-blue-800 dark:md:hover:text-blue-300 transition duration-300 ease-in-out";

  // return the JSX.Element
  return (
    <>
      <footer className="pb-2 flex flex-col content-center items-center text-center bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
        <div className="w-5/6">
          <div className="w-full grid grid-cols-1 md:grid-cols-5">
            <div className="text-left col-span-2 flex flex-col h-full my-5 mr-10">
              <p className="text-5xl flex items-center">
                <img
                  src="./favicon.ico"
                  className="w-14 h-14 items-center"
                  alt="WALL-O logo"
                />
                <span className="text-blue-500">WA</span>
                <span className="text-black dark:text-white">LL</span>
                <span className="text-red-500">-O</span>
              </p>
              <p className="opacity-70">
                Wall-O is an autonomous vehicle able to follow a line on the
                ground and avoid obstacles. This project is carried out as part
                of the bachelor of computer science at CY Cergy Paris University.
              </p>
            </div>

            <div className={divClassName}>
              <p className={titleClassName}>Navigation</p>
              <ul>
                <li>
                  <Link className={linkClassName} to="/">
                    Home
                  </Link>
                  <Link className={linkClassName} to="/about">
                    About Us
                  </Link>
                  <Link className={linkClassName} to="/docs">
                    Documentation
                  </Link>
                  <Link className={linkClassName} to="/dashboard">
                    Dashboard
                  </Link>
                </li>
              </ul>
            </div>

            <div className={divClassName}>
              <p className={titleClassName}>Our links</p>
              <ul>
                <li>
                  <a
                    className={linkClassName}
                    href="https://github.com/wallo-project"
                  >
                    Github
                  </a>
                </li>
              </ul>
            </div>

            <div className={divClassName}>
              <p className={titleClassName}>Réalisation</p>
              <ul>
                <li>
                  <a
                    className={linkClassName}
                    href="https://github.com/MicheloXy"
                  >
                    Maxime A
                  </a>
                </li>
                <li>
                  <a className={linkClassName} href="https://github.com/Skodaa">
                    Alex V
                  </a>
                </li>
                <li>
                  <a
                    className={linkClassName}
                    href="https://github.com/FalTeaK"
                  >
                    Matthieu V
                  </a>
                </li>
                <li>
                  <a className={linkClassName} href="https://github.com/benjaminpmd">
                    Benjamin P
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-[1px] w-5/6 m-3 border-gray-500 dark:border-gray-500"></div>

        <div className="my-0 text-left flex">
          <p className="text-gray-700 dark:text-gray-300 mx-5 ml-10">
            All rights reserved
          </p>
        </div>
      </footer>
    </>
  );
}
