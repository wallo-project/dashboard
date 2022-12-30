import Navbar from "./Navbar";

interface Props {
  title: string;
}

export default function Header(props: Props) {

  const routes = [
    { name: "Home", to: "/" },
    { name: "Dashboard", to: "/dashboard" },
    { name: "Documentation", to: "/docs" },
    { name: "About", to: "/about" },
  ];

  return (
    <header className="isolate text-black dark:text-white duration-300">
      <Navbar routes={ routes } />
      <h1 className="p-10 pb-20 text-5xl text-center font-bold">
        {props.title}
      </h1>
    </header>
  );
}
