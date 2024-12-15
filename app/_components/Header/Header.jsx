'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useDispatch, useSelector } from "react-redux";

import { ShoppingCart, Mail, Phone, Twitter, Facebook, Instagram } from 'lucide-react';

import TopMenu from './TopMenu';
import MainMenu from './MainMenu';
import SecondaryMenu from './SecondaryMenu';

function HeaderPage() {
  


  // console.log("Products in header", cartItemCount);


  return (
    <header className="bg-white shadow-md">
      {/* Top Bar */}
 <TopMenu />

<MainMenu />

   



<SecondaryMenu />
 
      {/* down menu end */}


    </header>
  )
}

export default HeaderPage