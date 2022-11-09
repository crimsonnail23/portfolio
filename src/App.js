import React, {useState} from 'react';
import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation'

function App() {

  const [sections]=useState([
    {
      name: 'About Me'
    },
    {
      name: 'Portfolio'
    },
    {
      name: 'Contact'
    },
    {
      name: 'Resume'
    }
  ])

  const [currentSection, setCurrentSection]=useState(sections[0])

  return (
  <div>
    <main>
      <Header></Header>
      <Navigation
        sections={sections}
        setCurrentSection={setCurrentSection}
        currentSection={currentSection}
      > 
      </Navigation>
      
    <About></About>
    <Footer></Footer>
    </main>
    </div>
  );
}

export default App;
