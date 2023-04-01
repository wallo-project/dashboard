/**
 * Component that contain the footer of the application.
 * 
 * @author WALL-O Dev Team
 * @version 1.0.0
 * @since 01/01/2023
 */

// import required elements
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Setup from "../components/docs/Setup";
import Troubleshoot from "../components/docs/Troubleshoot";

/**
 * Function that returns the documentation page of the app.
 * 
 * @returns JSX.Element
 */
export default function Docs() {
  return (
    <>
      <div className="min-h-screen text-black dark:text-white pb-5 bg-gradient-to-b from-gray-100 dark:from-gray-900 via-green-200 dark:via-green-700 to-gray-100 dark:to-gray-900">
        <Header title="Documentation" />
        <main>
          <Setup />
          <Troubleshoot />
        </main>
      </div>
      <Footer />
    </>
  );
}
