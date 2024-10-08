import React from 'react'
import { IoRocket } from "react-icons/io5";
import Image from 'next/image';
import HomeImage from '../images/home_image.png'

const Home = () => {
    return (
<section className='grid grid-cols-1 md:grid-cols-2 gap-4 px-4 md:px-10 py-10'>
    {/* Image Section */}
    <article className='flex items-center justify-center'>
        <Image
            className='w-full md:w-[450px] object-cover h-auto' // Responsive width, full on small screens
            src={HomeImage}
            alt='Cakap learning students for English'
        />
    </article>

    {/* Text Section */}
    <article className='flex items-center'>
        <div className='flex flex-col gap-4'>
            {/* Box with Rocket Icon */}
            <div className='bg-white p-4 w-full md:w-[250px] h-[50px] rounded-lg'>
                <h5 className='flex items-center'>
                    <IoRocket className='mr-2' />
                    No 1 platform for learning
                </h5>
            </div>

            {/* Heading */}
            <h2 className='text-2xl md:text-4xl w-full md:w-[400px]'>
                The Best Partner to Reach Fluency
            </h2>

            {/* Paragraph */}
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quod iure illum id numquam assumenda vel commodi, laboriosam facere. Possimus animi debitis officiis aperiam quam temporibus excepturi quas, minima dignissimos.
                Architecto dolor vitae autem soluta id ratione sit asperiores sapiente aspernatur exercitationem neque, quas, reprehenderit optio, quis fuga officia alias voluptas officiis odio corrupti. Exercitationem error laboriosam molestiae ea sequi.
            </p>

            {/* Buttons */}
            <div className='grid grid-cols-2 gap-5 w-full md:w-[250px]'>
                <button className='bg-slate-800 text-white p-4 rounded-md w-full'>Log In</button>
                <button className='bg-gray-300 text-slate-400 p-4 rounded-md w-full'>Trial Class</button>
            </div>
        </div>
    </article>
</section>

    )
}

export default Home