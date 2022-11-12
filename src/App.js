import React, { useState } from "react";
import About from "./components/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

function App() {
  document.title="Younus Y. Seddiq's Homepage";
  const [currentPage, setCurrentPage] = useState("about");
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
