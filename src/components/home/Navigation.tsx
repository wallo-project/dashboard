import {
  ChartBarSquareIcon,
  ClipboardDocumentIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";
import NavigationItem from "./NavigationItem";

export default function Navigation() {

  const iconClassNames: string = "h-32 w-32 object-center mx-auto";

  const routes = [
    {
      name: "Dashboard",
      to: "/dashboard",
      icon: <ChartBarSquareIcon className={iconClassNames} />,
    },
    {
      name: "Documentation",
      to: "/docs",
      icon: <ClipboardDocumentIcon className={iconClassNames} />,
    },
    {
      name: "About",
      to: "/about",
      icon: <QuestionMarkCircleIcon className={iconClassNames} />,
    },
  ];

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
