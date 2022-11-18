import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel';
import { useMemo, useRef, useState } from 'react';


function Carausel1App() {

    return (
        <div className="App">
<h1>Carausel using Bootstrap</h1><br/><br/>
<Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.whatsappimages.in/wp-content/uploads/2021/12/Free-HD-Nice-Whatsapp-DP-Pics-Download-2.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://hindify.org/wp-content/uploads/2021/12/nature-whatsapp-dp-hd.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://308286-943399-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2022/04/wallpaper-whatsapp-dp-hd.png"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
     </div>
    );
}

export default Carausel1App;
