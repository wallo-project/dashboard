import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="min-h-screen pb-5 bg-gradient-to-b from-gray-100 dark:from-gray-900 via-red-200 dark:via-red-700 to-gray-100 dark:to-gray-900">
        <Header title="Page Not Found" />
        <main className="text-center text-black dark:text-white">
          <section>
            <h2 className="text-3xl p-5">404</h2>
            <article>
              <h3 className="text-xl p-3">The page you requested does not exist</h3>
              <p className="p-3 mb-10">Bip Boop, we didn't found the page you requested, and we're pretty sad about it :(</p>
              <Link to="/" className="m-10 p-2 rounded-xl bg-black/20 bg-blur hover:bg-black/30 duration-300 ease-in-out">Return to Home</Link>
            </article>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Home;