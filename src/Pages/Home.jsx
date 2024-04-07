import { React, useState, useEffect } from 'react'
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import SecondSection from '../Components/SecondSection';
import FirstSection from '../Components/FirstSection';
import Layout from '../Components/Layout';




export default function Home() {

  return (

    <Layout>

      <div className='overflow-x-hidden overflow-hidden '>

        <FirstSection />
        <SecondSection />

      </div>

    </Layout>





  );

}




