import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './screens/Home/Home';
import Gallery from './screens/Gallery/Gallery';
import Work from './components/Work/Work';

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/explore' element={<Gallery />} />
          <Route path='/work/:slug' element={<Work />} /> 
        </Routes>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
