
import './App.css';
import{Link, Outlet,NavLink} from 'react-router-dom'
import Button from 'react-bootstrap/Button';


function HeaderApp() {
  return (
    <div className="App">
      <h1 style={{"color":"blue"}}>Flipkart</h1>

      <Button variant="outline-warning"><Link to="linkf">Fashion</Link></Button>{' '}
      <Button variant="outline-warning"><Link to="linke">Electronics</Link></Button>{' '}
      <Button variant="outline-warning"><Link to="linkh">Home Applainces</Link></Button>{' '}<br/><br/>
 
 <ul className="header1">
  <li><NavLink to="/linkhs">Hide Show</NavLink></li>
  <li><NavLink to="/linkoa">Object Array</NavLink></li>
  <li><NavLink to="/linkt">Digital Clock</NavLink></li>
  <li><NavLink to="/linkc">Calculator</NavLink></li>
  <li><NavLink to="/linkg">Bootstrap Grid</NavLink></li>
  <li><NavLink to="/linkho">HOC</NavLink></li>
  <li><NavLink to="/linkme">UseMemo</NavLink></li>
  <li><NavLink to="/linkref">UseRef</NavLink></li>
  <li><NavLink to="/linkcd">Controlled component</NavLink></li>
  <li><NavLink to="/linkucd">UnControlled component</NavLink></li>
  <li><NavLink to="/linkca">Card and Grid</NavLink></li>
  <li><NavLink to="/linkcar">Carausel bootstrap</NavLink></li>
  <li><NavLink to="/linkhm">Home page</NavLink></li>
  <li><NavLink to="/contact">Contact Page</NavLink></li>
  <li><NavLink to="/linkabo">About</NavLink></li>
  <li><NavLink to="/filter">Filter Page</NavLink></li>
  <li><NavLink to="/navigate">useNavigate</NavLink></li>
  <li><NavLink to="/login">login</NavLink></li>
  <li><NavLink to="/multiple">Multiple Inputs</NavLink></li>
  <li><NavLink to="/spread">Spread Operator</NavLink></li>
  <li><NavLink to="/remove">Remove or Delete Operation</NavLink></li>
  <li><NavLink to="/array">Use state Array</NavLink></li>
  <li><NavLink to="/addarray">Add,Remove & Update Array</NavLink></li>
  <li><NavLink to="/toggle">Toggle</NavLink></li>
  <li><NavLink to="/timeD">Time & Date</NavLink></li>
  <li><NavLink to="/todoL">ToDo List</NavLink></li>
  <li><NavLink to="/greeting">Greetings</NavLink></li>
  <li><NavLink to="/showu">API GET Method</NavLink></li>
  <li><NavLink to="/compA">props drilling</NavLink></li>
  <li><NavLink to="/compD">Use Context </NavLink></li>
  <li><NavLink to="/compH">Context API</NavLink></li>
  <li><NavLink to="/arrayID">Array data with ID</NavLink></li>
  <li><NavLink to="/grid">Grid Box</NavLink></li>
  <li><NavLink to="/getAPI">Get Data From Fake API</NavLink></li>
  <li><NavLink to="/pdrill">Prop Drilling Example</NavLink></li>
  <li><NavLink to="/pContext">Product Context Example</NavLink></li>
  <li><NavLink to="/weather">Weather App</NavLink></li>
  <li><NavLink to="/reg">Registration Page</NavLink></li>
  <li><NavLink to="/login2">Login </NavLink></li>
  <li><NavLink to="/addprod">Add Product</NavLink></li>
  <li><NavLink to="/weather2">Weather 2</NavLink></li>
</ul>
{/* <Button variant="outline-warning"><Link to="linkfref">ForwardRef</Link></Button>{' '} */}
      <Outlet/>
    </div>
  );
}

export default HeaderApp;
