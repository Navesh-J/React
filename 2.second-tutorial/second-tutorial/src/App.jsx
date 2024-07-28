//import { useState } from 'react'
//import './App.css'
import React from "react";
import Navbar from "./components/Navbar";
import Footer from './components/Footer'
import "./index.css"
import Card from "./components/Card";

function App() {
  return (
    <>
      <Navbar />
      <div className="cards m-8 flex gap-4 flex-wrap">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
      <Footer />
    </>
  )
}

export default App
