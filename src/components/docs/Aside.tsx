import { Link } from "react-router-dom";

export default function Aside() {
  const asideTitleClass: string = "text-xl font-semibold";
  const asideContentClass: string = "pl-2";

  return (
    <>
      <aside className="p-4 bg-blur rounded-r-xl bg-black/20 h-full float-left">
        <ul>
          <li>
            <Link to="#setup" className={asideTitleClass}>
              Setup
            </Link>
            <ul>
              <li>
                <Link to="#setup-robot" className={asideContentClass}>
                  The Robot
                </Link>
              </li>
              <li>
                <Link to="#setup-server" className={asideContentClass}>
                  The Server
                </Link>
              </li>
              <li>
                <Link to="#setup-gui" className={asideContentClass}>
                  The GUI
                </Link>
              </li>
              <li>
                <Link to="#setup-dashboard" className={asideContentClass}>
                  The Dashboard
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="#tutorial" className={asideTitleClass}>
              Tutorial
            </Link>
            <ul>
              <li>
                <Link to="#first-run" className={asideContentClass}>
                  The First Run
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="#troubleshoot" className={asideTitleClass}>
              Troubleshoot
            </Link>
            <ul>
              <li>
                <Link to="#troubleshoot-robot" className={asideContentClass}>
                  The Robot
                </Link>
              </li>
              <li>
                <Link to="#troubleshoot-server" className={asideContentClass}>
                  The Server
                </Link>
              </li>
              <li>
                <Link to="#troubleshoot-gui" className={asideContentClass}>
                  The GUI
                </Link>
              </li>
              <li>
                <Link
                  to="#troubleshoot-dashboard"
                  className={asideContentClass}
                >
                  The Dashboard
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </aside>
    </>
  );
}
