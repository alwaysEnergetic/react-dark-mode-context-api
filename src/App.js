import { useDarkMode } from './customhooks/ThemeHook';
import './App.css';
function App() {
  const [darkMode, setDarkMode] = useDarkMode(false);
  return (
    <div className="full-screen" style={{ backgroundColor: darkMode && '#282c34' }}>
      <h1 style={{ color: darkMode && 'white' }}>{darkMode ? 'Dark Theme' : 'Light Theme'}</h1>
      <p style={{ color: darkMode && 'white' }}>Wow this is awesome!</p>
      <button
        onClick={() => setDarkMode(!darkMode)}
        style={{ color: darkMode && 'white', background: darkMode && '#db7093' }}
      >
        {darkMode ? 'Select Light Theme' : 'Select Dark Theme'}
      </button>
    </div>
  );
}

export default App;
