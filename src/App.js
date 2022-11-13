import React, { useState } from "react";
import About from "./components/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  //changes title of site.
  document.title="Younus Y. Seddiq's Homepage";

  //sets page to these two states, currentPage and setCurrentPage.
  const [currentPage, setCurrentPage] = useState("about");

  //the page that renders will be the one that the user clicks on. if they click on About, then that's the the page that will render.
  //if they click on portfolio, then that's the page that will render. it will default to render the About page.
  const renderPage = () => {
    if (currentPage === "about") {
      return <About />;
    } else if (currentPage === "portfolio") {
      return <Portfolio />;
    } else if (currentPage === "contact") {
      return <Contact />;
    } else if (currentPage === "resume") {
      return <Resume />;
    } else {
      return <About />;
    }
  };
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <div>
      <main>
        <Header></Header>
        <Navigation
          handlePageChange={handlePageChange}
          currentPage={currentPage}
        ></Navigation>

        {renderPage()}
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
