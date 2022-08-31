
import { ReactP5Wrapper } from "react-p5-wrapper";
import { LabelsList } from "./components/LabelsList";
import { sketch } from "./components/sketch";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";




function App() {
 /*return */
  return(  <BrowserRouter>
    <Routes>
<Route  path="/" element={<LabelsList />}/>



   
<Route path="/historia/:indice1" element={<ReactP5Wrapper sketch={sketch}></ReactP5Wrapper> }/>



 </Routes>
 </BrowserRouter> )

}
export default App;
