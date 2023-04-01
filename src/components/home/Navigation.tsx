/**
 * Component that contain the footer of the application.
 * 
 * @author WALL-O Dev Team
 * @version 1.0.0
 * @since 01/01/2023
 */

// import required elements
import { ChartBarSquareIcon, ClipboardDocumentIcon, QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import NavigationItem from "./NavigationItem";

/**
 * Function that return the navigation menu of the landing page.
 * 
 * @returns a JSX.Element, the navigation menu.
 */
export default function Navigation() {

  // css classes of the icons
  const iconClassNames: string = "h-32 w-32 object-center mx-auto";

  // routes of the menu
  const routes = [
    {
      name: "About Us",
      to: "/about",
      icon: <QuestionMarkCircleIcon className={iconClassNames} />
    },
    {
      name: "Documentation",
      to: "/docs",
      icon: <ClipboardDocumentIcon className={iconClassNames} />
    },
    {
      name: "Dashboard",
      to: "/dashboard",
      icon: <ChartBarSquareIcon className={iconClassNames} />
    }    
  ];

  // return the JSX.Element
  return (
    <section className="text-center m-5 text-black dark:text-white">
      <h2 className="text-3xl font-semibold p-10">Discover More</h2>
      <div className="grid grid-cols-1 md:grid-cols-3">
        {routes.map((item) => (
          <NavigationItem name={item.name} to={item.to} icon={item.icon} />
        ))}
      </div>
    </section>
  );
}
