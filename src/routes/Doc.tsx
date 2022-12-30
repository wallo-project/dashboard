import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Link } from "react-router-dom";

function Home() {
  const asideTitleClass: string = "text-xl font-semibold";
  const asideContentClass: string = "pl-2";

  return (
    <>
      <div className="min-h-screen text-black dark:text-white pb-5 bg-gradient-to-b from-gray-100 dark:from-gray-900 via-green-200 dark:via-green-700 to-gray-100 dark:to-gray-900">
        <Header title="Documentation" />
        <main>
          <aside className="p-4 bg-blur rounded-r-xl bg-black/20 h-full float-left">
            <ul>
              <li>
                <Link to="#setup" className={asideTitleClass}>Setup</Link>
                <ul>
                  <li><Link to="#setup-robot" className={asideContentClass}>The Robot</Link></li>
                  <li><Link to="#setup-server" className={asideContentClass}>The Server</Link></li>
                  <li><Link to="#setup-gui" className={asideContentClass}>The GUI</Link></li>
                  <li><Link to="#setup-dashboard" className={asideContentClass}>The Dashboard</Link></li>
                </ul>
              </li>
              <li>
                <Link to="#tutorial" className={asideTitleClass}>Tutorial</Link>
                <ul>
                  <li><Link to="#first-run" className={asideContentClass}>The First Run</Link></li>
                </ul>
              </li>
              <li>
                <Link to="#troubleshoot" className={asideTitleClass}>Troubleshoot</Link>
                <ul>
                  <li><Link to="#trouble-robot" className={asideContentClass}>The Robot</Link></li>
                  <li><Link to="#trouble-server" className={asideContentClass}>The Server</Link></li>
                  <li><Link to="#trouble-gui" className={asideContentClass}>The GUI</Link></li>
                  <li><Link to="#trouble-dashboard" className={asideContentClass}>The Dashboard</Link></li>
                </ul>
                </li>
            </ul>
          </aside>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Home;
