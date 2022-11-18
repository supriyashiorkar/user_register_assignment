import logo from './logo.svg';
import './App.css';
import{BrowserRouter,Routes,Route,Link, Outlet} from 'react-router-dom'
import{useState} from 'react'
import Button from 'react-bootstrap/Button';

function HideshowApp() {
    const [status,setstatus]=useState(true)
  return (
    <div className="App">
      {
        status? <h2>Hello World :</h2>:null
      }
      <button onClick={()=>setstatus(false)}>hide</button>
      <button onClick={()=>setstatus(true)}>Show</button><br/><br/>
      <button onClick={()=>setstatus(!status)}>Toggle</button><br/><br/>
      <>
      <Button variant="primary">Primary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="success">Success</Button>{' '}
      <Button variant="warning">Warning</Button>{' '}
      <Button variant="danger">Danger</Button>{' '}
      <Button variant="info">Info</Button>{' '}
      <Button variant="light">Light</Button>{' '}
      <Button variant="dark">Dark</Button> <Button variant="link">Link</Button>
    </>
    </div>
  );
}

export default HideshowApp;
