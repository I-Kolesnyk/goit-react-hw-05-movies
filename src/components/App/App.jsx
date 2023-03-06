import { Route, Routes } from "react-router-dom";

import Home from "pages/Home";
import Movies from "pages/Movies";

import Layout from "components/Layout";


const App = () => {


  return (
<Routes>
  <Route path='/' element ={<Layout/>}>
<Route index element={<Home/>}/>
<Route path='movies' element={<Movies/>}/>
  </Route>
</Routes>
  );
};

export default App;
