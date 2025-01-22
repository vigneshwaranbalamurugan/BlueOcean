import React from 'react'
import Image from 'next/image';
import Logo from '@images/favicon.svg';
const HeaderComponent = () => {
  return (
    <>
    <Image
    src={Logo}
    alt='Blue Ocean Logo'
    />
    <h1>Blue Ocean</h1>
    </>
  )
}

export default HeaderComponent;