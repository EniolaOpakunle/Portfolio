import './App.css';
import Home from './pages/Home';
import {Routes , Route} from 'react-router-dom'
import Profile from './pages/Profile';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <div id='overall'>
      <Home/>
      <Profile/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
