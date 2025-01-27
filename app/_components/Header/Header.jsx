'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Menu, Search, ShoppingCart, User } from "lucide-react";

import TopMenu from './TopMenu';
import MainMenu from './MainMenu';
import SecondaryMenu from './SecondaryMenu';
import Mobileheader from './Mobileheader';

function HeaderPage() {



  // console.log("Products in header", cartItemCount);


  return (
    <>
    {/* Mobile Header */}
    <Mobileheader />
    {/* Header for large devices */}
    <header className="bg-white shadow-md hidden lg:block">
        {/* Top Bar */}
        <TopMenu />
        <MainMenu />
        <SecondaryMenu />
        {/* down menu end */}
      </header>
    </>
  )
}

export default HeaderPage