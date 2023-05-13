import './App.css';
import './colors.css'
import { Dashboard ,PageNotFound} from './Components';
import {Route, Routes } from 'react-router-dom';
import { LocationProvider } from './Contexts/LocationContext';
import { ThemeProvider } from './Contexts/ThemeContext';

function App() {

  return (
    <div className="App">
      <ThemeProvider>
        <LocationProvider>
          <Routes>
            <Route path='/' element={<Dashboard/>} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </LocationProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
