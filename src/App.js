import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import  'bootstrap/dist/js/bootstrap.bundle.min.js'
import Employee from './component/Employee';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Search from './component/Search';
import Viewall from './component/Viewall';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/'exact element={<Employee/>}/>
          <Route path='/search'exact element={<Search/>}/>
          <Route path='/view'exact element={<Viewall/>}/>
        </Routes>                                                                                   
      </BrowserRouter>
      
    </div>
  );
}

export default App;
