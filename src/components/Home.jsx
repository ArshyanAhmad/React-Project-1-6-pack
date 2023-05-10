import React from 'react'
import vg from '../assets/2.webp'
import { AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram } from 'react-icons/ai'
import Footer from './Footer'

export default function Home() {
    return (
        <>
            <section className='home' id='home'>
                <main>
                    <h1>TechyStar</h1>
                    <p>Solution to all your problems</p>
                </main>
            </section>

            <section className='home2'>

                <img src={vg} alt="Graphics" />
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio sunt laudantium ad hic repellat, pariatur eum quibusdam esse deserunt autem, ab fugiat dolor quos alias?</p>
                </div>

            </section>

            <section className='home3' id='about'>
                <div>
                    <h1>Who we are?</h1>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel maxime mollitia dolor molestias reiciendis facere ipsum quaerat, sequi sit inventore et cumque eum sint autem, tenetur, culpa necessitatibus illum voluptates aut iste minus. Animi odit corporis nostrum aperiam, quibusdam doloribus accusamus, pariatur eum, enim fugit voluptatibus quidem possimus dolorum voluptates?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit perferendis sit nihil exercitationem quas consequuntur fugiat aliquid magni nesciunt. Eius, similique corrupti? Iure, hic fugit. Doloremque assumenda soluta quae deserunt!

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae aliquid eligendi quam a impedit ex hic nam voluptate iste at?
                    </p>
                </div>
            </section>

            <section className='home4' id='brands'>
                <div className='firstDiv'>
                    <h1>Brands</h1>

                    <article>

                        <div style={{ animationDelay: "0.3s" }}>

                            <AiFillGoogleCircle />
                            <p>Google</p>

                        </div>

                        <div style={{ animationDelay: "0.5s" }}>

                            <AiFillAmazonCircle />
                            <p>Amazon</p>

                        </div>

                        <div style={{ animationDelay: "0.7s" }}>

                            <AiFillYoutube />
                            <p>Youtube</p>

                        </div>

                        <div style={{ animationDelay: "1s" }}>

                            <AiFillInstagram />
                            <p>Instagram</p>

                        </div>

                    </article>
                </div>
            </section>

        </>
    )
}
