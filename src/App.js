import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomeContainer from './components/HomeContainer';
import NavbarContainer from './components/NavbarContainer';
import AboutContainer from './components/AboutContainer';


function App() {

  return (
      <BrowserRouter>
          <NavbarContainer />
          <div className='app'>
              <Routes>
                  <Route path={'/'} element={<HomeContainer />} />
                  <Route path={'/about'} element={<AboutContainer />} />
              </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;
