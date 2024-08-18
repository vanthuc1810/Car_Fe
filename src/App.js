import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import { NavRoutes } from './routes/NavRoutes';
import { Footer } from './components/Footer/Footer';
import { Toaster } from "react-hot-toast";
function App() {  
  return (
    
    <div className="App">
      <Header/>
      <NavRoutes/>
      <Toaster
      position='top-right'
      reverseOrder={false}
      toastOptions={{
        success: {duration: 1500},
        error: {duration: 1500}
      }}
      containerStyle={{
        top: "6rem"
      }}
      />
    </div>
  );
}

export default App;
