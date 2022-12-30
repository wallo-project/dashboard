import { Link } from "react-router-dom"

interface Props {
  name: string,
  to: string,
  icon: any,
}

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
