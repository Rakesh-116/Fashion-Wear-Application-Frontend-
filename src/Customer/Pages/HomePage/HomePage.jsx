import React from 'react'
import MainCarousel from '../../Components/HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../../Components/HomeSectionCarousel/HomeSectionCarousel'
import { mens_kurta } from '../../../Data/Mens/mens_kurta'
import { mens_shirt } from '../../../Data/Mens/mens_shirt'
import { mens_jeans } from '../../../Data/Mens/mens_jeans'
import { womens_dress } from '../../../Data/Womens/womens_dress'
import { womens_top } from '../../../Data/Womens/womens_top'
import { womens_jeans } from '../../../Data/Womens/womens_jeans'

const HomePage = () => {
    return (
        <div>
            <MainCarousel />
            <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
                <HomeSectionCarousel products={mens_kurta} sectionName={"Men's Kurtha"} />
                <HomeSectionCarousel products={mens_shirt} sectionName={"Men's Shirt"} />
                <HomeSectionCarousel products={mens_jeans} sectionName={"Men's Jeans"} />
                <HomeSectionCarousel products={womens_dress} sectionName={"Women's Dress"} />
                <HomeSectionCarousel products={womens_top} sectionName={"Women's Top"} />
                <HomeSectionCarousel products={womens_jeans} sectionName={"Women's Jeans"} />
            </div>
        </div>
    )
}

export default HomePage