import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './screens/Home/Home';
import Gallery from './screens/Gallery/Gallery';

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/gallery' element={<Gallery />} />
        </Routes>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
