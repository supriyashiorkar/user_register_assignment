import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import { useMemo, useRef, useState,forwardRef } from 'react';

function FRefChildApp(props,ref) {
  
    return (
        <div className="App">
<h1>ForwardRef Hook child component</h1>
<input type="text" ref="ref"/>

        </div>
    );
}

export default forwardRef (FRefChildApp);
