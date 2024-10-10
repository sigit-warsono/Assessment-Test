import React from 'react'
import Banner from '../../fragments/frag-home/Banner'
import IndustriesGreen from '../../fragments/frag-home/IndustriesGreen'
import BindustriesG from '../../fragments/frag-home/BindustriesG'
import RoadmapRegis from '../../fragments/frag-home/RoadmapRegis'
import Parthnership from '../../fragments/frag-home/Parthnership'
import StandardIndustries from '../../fragments/frag-home/StandardIndustries'
import Faq from '../../fragments/frag-home/Faq'

const LayoutHome = () => {
  return (
    <div className='flex flex-col'>
        <Banner/>
        <IndustriesGreen />
        <BindustriesG />
        <RoadmapRegis />
        <Parthnership />
        <StandardIndustries />
        <Faq />
    </div>
  )
}

export default LayoutHome