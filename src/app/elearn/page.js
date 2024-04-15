"use client"
import React, { useState } from 'react';
import Header from '../components/header';
import './css/style.css';
import Sidefilter from './Sidefilter';
import Actcoursol from './Actcoursol';
import CardsList from './CardsList';

function Page() {

  return (
    <>
      <Header />
      <div className="container-fluid">
        <br />
        
          <Sidefilter/>
          <Actcoursol/>
          {/* <CardsList/> */}


      </div>
    </>
  );
}

export default Page;
