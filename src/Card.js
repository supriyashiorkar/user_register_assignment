import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import { useMemo, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



function CardApp() {

    return (
        <div className="App">
<h1>Webpage using Card and Grid in Bootstrap</h1><br/><br/>
<Container>
      <Row md={4}>
        <Col><Card style={{ width: '18rem' ,height:'18rem'}}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/54/7d/b7/547db70945c37faf12672542bc81af0e.jpg" />
      <Card.Body>
        <Card.Title>Radhe Krishna</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card></Col>
        <Col > <Card style={{ width: '18rem',height:'18rem' }}>
      <Card.Img variant="top" src="https://c8.alamy.com/comp/2HBXT1P/lord-bal-krishna-with-colorful-background-wallpaper-god-bal-krishna-poster-design-for-wallpaper-2HBXT1P.jpg" />
      <Card.Body>
        <Card.Title>Little kanha</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card></Col>
        <Col> <Card style={{ width: '18rem',height:'18rem' }}>
      <Card.Img variant="top" src="https://wallpaperaccess.com/full/1103397.jpg" />
      <Card.Body>
        <Card.Title>Kanhaiya</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card></Col>
      </Row>
    </Container>
     </div>
    );
}

export default CardApp;
