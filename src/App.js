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
      <div>
        <p className='text-center title'>Projects</p>
      </div>
      <Projects/>
      <div>
        <p className='text-center title'>Contact</p>
      </div>
      <Contact/>
    </div>
    // <Routes>
    //   <Route path='/' element = {<Home/>}/>
    //   <Route path='/profile' element = {<Profile/>}/>
    //   <Route path='/projects' element = {<Projects/>} />
    //   <Route path='/contact' element = {<Contact/>} />
    //   <Route path='*' element = {<PageNotFound/>} />
    // </Routes>
  );
}

export default App;
