import './css/App.css';
import Footer from './component/footer';
import Header from './component/header';
import Home from './component/home'
import About from './component/about'
import Project from './component/project'
import Contact from './component/contact'
import { useRef } from 'react';


function App() {
  const resultRefHome = useRef(null);
  const resultRefAbout = useRef(null);
  const resultRefProject = useRef(null);
  const resultRefContact = useRef(null);

  return (
    <div className="App">      
      <Header resultRefHome={resultRefHome} resultRefAbout={resultRefAbout} resultRefProject={resultRefProject} resultRefContact={resultRefContact} />
      <Home ref={resultRefHome}/>
      <About ref={resultRefAbout}/>
      <Project ref={resultRefProject}/>
      <Contact ref={resultRefContact}/>
      <Footer/>
    </div>
  );
}

export default App;
