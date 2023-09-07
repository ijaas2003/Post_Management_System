import './App.scss';
import Navbar from "./components/Navbar/Navbar";
import Header from './components/Header';

import { useEffect, useState } from 'react';
import Posts from './components/Posts';

function App() {
  const [direction, setDirection] = useState('row');
    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth <= 900) {
            setDirection('column');
          } else {
            setDirection('row');
          }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

  return (
    <div className="app">
      <Navbar />
      <Header direction={direction} />
      <Posts  direction={direction}/>
    </div>
  );
}

export default App;
