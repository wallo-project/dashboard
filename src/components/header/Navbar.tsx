/**
 * Component that contain the footer of the application.
 * 
 * @author WALL-O Dev Team
 * @version 1.0.0
 * @since 01/01/2023
 */

// import required elements
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, LightBulbIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

// props are like arguments to pass
interface Props {
  routes: Array<{ name: string; to: string }>;
}

/**
 * Function that set the theme to apply to the app.
 */
function setTheme() {
  if (document.documentElement.classList.contains("dark")) {
    localStorage.theme = ""
    document.documentElement.classList.remove("dark")
  }
  else {
    localStorage.theme = "dark"
    document.documentElement.classList.add("dark")
  }
}

/**
 * Function that return the JSX.Element containing the navbar.
 * 
 * @param props routes to display
 * @returns the navbar of the app.
 */
export default function Navbar(props: Props) {

  // state to check if the mobile menu is opened or not
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="px-6 pt-6 lg:px-8">
      <div>
        <nav
          className="flex h-9 items-center justify-between"
          aria-label="Global"
        >
          <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="self-center flex ml-2 text-2xl font-extrabold text-gray-900 whitespace-nowrap dark:text-white">
                <img
                  src="./favicon.ico"
                  className="h-8 w-8 mr-2"
                  alt="WALL-O"
                />
                WALL-O
              </span>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
            {props.routes.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                className="font-semibold md:hover:text-blue-800 dark:md:hover:text-blue-300 transition duration-300 ease-in-out"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
            <button
              aria-label="Toggle between Dark and Light mode"
              data-aw-toggle-color-scheme
              onClick={setTheme}
            >
              <LightBulbIcon
                className="h-6 w-6 text-black dark:text-white"
                aria-hidden="false"
              />
            </button>
          </div>
        </nav>
        <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <Dialog.Panel className="fixed inset-0 z-10 overflow-y-auto bg-gray-100 dark:bg-gray-900 px-6 py-6 lg:hidden">
            <div className="flex h-9 items-center justify-between">
              <Link to="/" className="-m-1.5 p-1.5">
                <span className="self-center flex ml-2 text-2xl font-extrabold text-gray-900 whitespace-nowrap dark:text-white">
                  <img
                    src="./favicon.ico"
                    className="h-8 w-8 mr-2"
                    alt="WALL-O"
                  />
                  WALL-O
                </span>
              </Link>
              <div className="flex">
                <button
                  type="button"
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {props.routes.map((item) => (
                    <Link
                      key={item.name}
                      to={item.to}
                      className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-black dark:text-white"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6"></div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </div>
    </div>
  );
}
