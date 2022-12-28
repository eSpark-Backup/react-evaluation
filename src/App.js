import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar/navBar';
import Hero from './components/heroSection/hero';
import About from './components/aboutus/about';

function App() {
  return (
    <div className="App">
        <NavBar /> <Hero /> <About />
    </div>
  );
}

export default App;
