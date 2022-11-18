
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import HeaderApp from './Header';
import FashionApp from './Fashion';
import ElectronicsApp from './Electronics';
import HomeAppliancesApp from './HomeAppliances';
import HideshowApp from './Hideshow';
import ObjectArrayApp from './ObjectArray';

import TimeApp from './Time';
import CalculatorApp from './Calculator';
import GridApp from './Grid';
import HocApp from './Hoc';
import MemoApp from './Memo';
import RefApp from './Ref';

import ControlledCApp from './ControlledC';
import UncontrolledC from './UncontrolledC';
import CardApp from './Card';
import Carausel1App from './Carausel1';
import HomeCApp from './Home';
import AboutApp from './About';
import Page4O4PageApp from './Page4O4page';
import UserApp from './User';
import FilterApp from './Filter';
import NavigateApp from './Navigate';
import ContactApp from './Contact';
import CompanyApp from './Company';
import ChannelApp from './Channel';
import OtherApp from './Other';
import LoginApp from './Login';
import ProtectedApp from './Protected';
import MultipleInputsApp from './MultipleInputs';
import SpreadOprtrCApp from './SpreadOprtr';
import RemoveCApp from './Remove';
import UseStateArrayApp from './UseStateArray';
import AddArrayApp from './AddArray';
import ToggleApp from './Toggle';
import TimeDateApp from './TimeDate';
import ToDoListApp from './ToDoList';
import Greetings from './Greetings';
import ShowUsers from './ShowUsers';
import List from './List';
import CompA from './CompA';
import CompD from './CompD';

import CompH from './CompH';
import IdArray from './IdArray';
import GridBox from './GridBox';
import GetAPI from './GetAPI';
import Propdrill1 from './PropDrill/Propdrill1';
import ProductContext1 from './ProductContext/ProductContext1';
import { createContext } from 'react';
import Weather from './Weather';
import Registration from './Registration';
import LoginPage from './LoginPage';
import AddProduct from './AddProduct';
import Weather2 from './Weather2';

const contextProd=createContext()
function App() {

  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HeaderApp />}>
            <Route path='/linkf' element={<FashionApp />}></Route>
            <Route path='/linke' element={<ElectronicsApp />}></Route>
            <Route path='/linkh' element={<HomeAppliancesApp />}></Route>
            <Route path='/linkhs' element={<HideshowApp />}></Route>
            <Route path='/linkoa' element={<ObjectArrayApp />}></Route>
            <Route path='/multiple' element={<MultipleInputsApp />}></Route>
            <Route path='/linkt' element={<TimeApp />}></Route>
            <Route path='/addarray' element={<AddArrayApp />}></Route>
            <Route path='/toggle' element={<ToggleApp />}></Route>
            <Route path='/timeD' element={<TimeDateApp />}></Route>
            <Route path='/todoL' element={<ToDoListApp />}></Route>
            <Route path='/showu' element={<ShowUsers/>}></Route>
           <Route path='/list' element={<List/>}></Route>
           <Route path='/weather' element={<Weather/>}></Route>
            <Route path='/greeting' element={<Greetings />}></Route>
            <Route path='/linkc' element={<CalculatorApp />}></Route>
            <Route path='/spread' element={<SpreadOprtrCApp />}></Route>
            <Route path='/remove' element={<RemoveCApp />}></Route>
            <Route path='/array' element={<UseStateArrayApp />}></Route>
            <Route path='/login' element={<LoginApp />}></Route>
            <Route path='/linkg' element={<GridApp />}></Route>
            <Route path='/linkho' element={<HocApp/>}></Route>
            <Route path='/linkme' element={<MemoApp />}></Route>
            <Route path='/linkref' element={<RefApp />}></Route>
            <Route path='/linkcd' element={<ControlledCApp />}></Route>
            <Route path='/linkucd' element={<UncontrolledC />}></Route>
            <Route path='/linkca' element={<CardApp />}></Route>
            <Route path='/linkcar' element={<Carausel1App />}></Route>
            <Route path='/linkhm' element={<HomeCApp  />}></Route>
            <Route path='/compA' element={<CompA />}></Route>
          <Route path='/compD' element={<CompD />}></Route>
          <Route path='/compH' element={<CompH />}></Route>
          <Route path='/arrayID' element={<IdArray />}></Route>
          <Route path='/grid' element={<GridBox/>}></Route>
          <Route path='/reg' element={<Registration/>}></Route>
          <Route path='/login2' element={<LoginPage/>}></Route>
          <Route path='/addprod' element={<AddProduct/>}></Route>
          <Route path='/getAPI' element={<GetAPI/>}></Route>
          <Route path='/weather2' element={<Weather2/>}></Route>
          <Route path='/pdrill' element={<Propdrill1 amount="500"/>}></Route>
          <Route path='/pContext' element=
          {  
           <contextProd.Provider value={{name:"supriya",age:31}}>
           <ProductContext1/>
          </contextProd.Provider>}>
          </Route>
            <Route path='/linkabo' element={<ProtectedApp component={AboutApp} />}></Route>
            <Route path='/*' element={<Page4O4PageApp />}></Route>
            <Route path='/user/:name' element={<UserApp />}></Route>
            <Route path='/filter' element={<FilterApp/>}></Route>
            <Route path='/navigate' element={<NavigateApp />}></Route>
            <Route path='/contact/' element={<ContactApp />}> </Route>
            <Route path='/company' element={<CompanyApp />}></Route>
            <Route path='/channel' element={<ChannelApp/>}></Route>
            <Route path='/other' element={<OtherApp />}></Route>
           
            {/*<Route path='/linkfref' element={<ForwardRefApp/>}></Route> */}
          </Route>
        </Routes>

      </BrowserRouter>
     
    </div>
  );
}

export default App;
export { contextProd }