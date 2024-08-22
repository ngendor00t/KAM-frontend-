import './App.css';
import ExportsData from './Components/Exportsdata';
import ImportsData from './Components/Importsdata';
import Navbarpage from './Components/pages/Navbarpage';
import Homepage from './Components/pages/Homepage';
import Footerpage from './Components/pages/Footerpage';
// import LoginPage from './pages/LoginPage';
// import About from'./pages/aboutPage'

function App() {
  return (
    <div className="App">
      <ExportsData/>
      <ImportsData/> 
      <Navbarpage/>
      <Homepage/>
      <Footerpage/>
      {/* <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About/>} />
        */}
      {/* </Routes> */}

    
  
      
    </div>
  );
}

export default App;
