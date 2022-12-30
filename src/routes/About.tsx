import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

function Home() {
  return (
    <>
      <div className="min-h-screen pb-5 bg-gradient-to-b from-gray-100 dark:from-gray-900 via-orange-200 dark:via-orange-700 to-gray-100 dark:to-gray-900">
        <Header title="About" />
        <main>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Home;
