import './App.css';
import Home from './components/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import TransformationComponent from './components/TransformationComponent';
function App() {
  return (
     <>
       <BrowserRouter>
         <Routes>
           <Route exact path="/" element={<Home />} />
           <Route exact path="/transformations" element={<TransformationComponent />} />
         </Routes>
       </BrowserRouter>
  
     </>
  );
}

export default App;
