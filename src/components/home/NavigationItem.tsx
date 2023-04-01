/**
 * Component that contain an element of the menu.
 * 
 * @author WALL-O Dev Team
 * @version 1.0.0
 * @since 01/01/2023
 */

// import required elements
import { Link } from "react-router-dom"

// arguments of the component
interface Props {
  name: string,
  to: string,
  icon: any,
}

/**
 * Function that return a navigation menu item at the bottom of the landing page.
 * 
 * @param props the arguments of the function, the name to display, the route, and the icon.
 * @return a JSX.Element.
 */
export default function NavigationItem(props: Props) {
  return (
    <Link to={props.to} className="m-5">
      <article className="p-2 bg-black/20 bg-blur text-center rounded-2xl hover:scale-105 duration-300 ease-in-out">
        {props.icon}
        <h3 className="text-xl font-medium">{props.name}</h3>
        
      </article>
    </Link>
  );
}
