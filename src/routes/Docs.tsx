import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Setup from "../components/docs/Setup";
import Tutorial from "../components/docs/Tutorial";
import Troubleshoot from "../components/docs/Troubleshoot";

export default function Docs() {
  return (
    <>
      <div className="min-h-screen text-black dark:text-white pb-5 bg-gradient-to-b from-gray-100 dark:from-gray-900 via-green-200 dark:via-green-700 to-gray-100 dark:to-gray-900">
        <Header title="Documentation" />
        <main>
          <Setup />
          <Tutorial />
          <Troubleshoot />
        </main>
      </div>
      <Footer />
    </>
  );
}
