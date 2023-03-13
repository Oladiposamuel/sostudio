import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './screens/Home/Home';
import Gallery from './screens/Gallery/Gallery';
import Work from './components/Work/Work';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/explore' element={<Gallery />} />
        <Route path='/work/:slug' element={<Work />} /> 
        <Route  path='/*' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
