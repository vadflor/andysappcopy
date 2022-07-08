import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import routes from "./routes/index";

import './App.css';

function App() {

  return (
    <Suspense fallback={null}>
      
      <Header />

      <Routes > 
        {routes.map((router) => {
          return <Route path={router.path} key={router.path}  element={<router.component/>} />
        })}
      </Routes>

      <Footer/>
    </Suspense>
  );
}

export default App;
