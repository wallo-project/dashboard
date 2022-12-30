import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

import Presentation from "../components/home/Presentation";
import Navigation from "../components/home/Navigation";

function Home() {
  return (
    <>
      <div className="min-h-screen pb-5 bg-gradient-to-b from-gray-100 dark:from-gray-900 via-blue-200 dark:via-blue-700 to-gray-100 dark:to-gray-900">
        <Header title="Home" />
        <main>
          <Presentation />
          <Navigation />
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Home;
