import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import './App.css';
// import { useHistory } from 'react-router'
import AboutUsPage from './Components/AboutUsPage';
import HomePage from './Components/HomePage';
import OurFarmPage from './Components/OurFarmPage';
import GalleryPage from './Components/GalleryPage';
import OurProductsPage from './Components/OurProductsPage';


import Topbar from './Components/Topbar';
import ContactUsPage from './Components/ContactUsPage';
import PoultryExpertsPage from './Components/PoultryExpertsPage';
import { BrowserRouter } from 'react-router-dom';



function App() {
  return (
  <>
 <BrowserRouter>

    <Switch>
        <Route exact path="/AboutUs"> <Topbar/> <AboutUsPage/>               </Route>
        <Route exact path="/OurFarm"> <Topbar/> <OurFarmPage/>               </Route>
        <Route exact path="/OurProducts"> <Topbar/> <OurProductsPage/>       </Route>
        <Route exact path="/Gallery"> <Topbar/> <GalleryPage/>               </Route>
        <Route exact path="/ContactUsPage"> <Topbar/> <ContactUsPage/>               </Route>
        <Route exact path="/PoultryExpertsPage"> <Topbar/> <PoultryExpertsPage/>               </Route>
        
        <Route exact path="/"><Topbar/><HomePage/></Route>
    </Switch>


</BrowserRouter>


  {/* <HomePage/> */}
  </>
  );
}

export default App;
