import React from 'react'
import image1 from '../assets/3.jpg'
import image2 from '../assets/4.jpg'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

export default function Services() {
    return (
        <section className='services'>
            <Carousel
                infiniteLoop
                autoPlay
                showStatus={false}
                showArrows={false}
                interval={1000}
                showThumbs={false}
            >
                <div>
                    <img src={image1} alt="item1" />
                    <p style={{cursor: "pointer", padding: ".6rem 0", fontSize: "1.3rem"}}  className='legend'>Full Stack</p>
                </div>

                <div>
                    <img src={image2} alt="item2" />
                    <p style={{cursor: "pointer", padding: ".6rem 0", fontSize: "1.3rem"}} className='legend'>Digital Marketing</p>
                </div>
            </Carousel>
        </section>
    )
}
