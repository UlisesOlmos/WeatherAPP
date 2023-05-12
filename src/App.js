import './App.css';
import './colors.css'
import { Dashboard } from './Components';
import { LocationProvider } from './Contexts/LocationContext';
import { ThemeProvider } from './Contexts/ThemeContext';

function App() {

  return (
    <div className="App">
      <ThemeProvider>
        <LocationProvider>
          <Dashboard />
        </LocationProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
