/**
 * Component that export the header of the application.
 * 
 * @author WALL-O Dev Team
 * @version 1.0.0
 * @since 01/01/2023
 */

// import required elements
import Navbar from "./Navbar";

// interface of Props required
interface Props {
  title: string;
}

/**
 * Function that return the header.
 * 
 * @param props The arguments to pass to the component, in this case, the title.
 * @returns a JSX.Element.
 */
export default function Header(props: Props) {

  // routes to pass to the navbar
  const routes = [
    { name: "Home", to: "/" },
    { name: "About Us", to: "/about" },
    { name: "Documentation", to: "/docs" },
    { name: "Dashboard", to: "/dashboard" },
  ];

  // return the JSX.Element
  return (
    <header className="isolate text-black dark:text-white duration-300">
      <Navbar routes={ routes } />
      <h1 className="p-10 pb-20 text-5xl text-center font-bold">
        {props.title}
      </h1>
    </header>
  );
}
