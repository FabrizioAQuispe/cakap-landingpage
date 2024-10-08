import React from 'react'
import { FaUser } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { MdOutlineVideoCameraFront } from "react-icons/md";


const Services = () => {
    interface Services {
        icon: any,
        title: string,
        descripcion: string
    }

    const servicios: Services[] = [
        { icon: <FaUser className='text-blue-500 text-5xl' />, title: 'Individual Learning', descripcion: '                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quod iure illum id numquam assumenda vel commodi, laboriosam facere. Possimus animi debitis officiis aperiam quam temporibus excepturi quas, minima dignissimos.' },
        { icon: <FaUserFriends className='text-blue-500 text-5xl' />, title: 'Group Learning', descripcion: '                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quod iure illum id numquam assumenda vel commodi, laboriosam facere. Possimus animi debitis officiis aperiam quam temporibus excepturi quas, minima dignissimos.' },
        { icon: <AiFillMessage className='text-blue-500 text-5xl' />, title: 'Live Chat Support', descripcion: '                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quod iure illum id numquam assumenda vel commodi, laboriosam facere. Possimus animi debitis officiis aperiam quam temporibus excepturi quas, minima dignissimos.' },
        { icon: <MdOutlineVideoCameraFront className='text-blue-500 text-5xl' />, title: 'Video Lessons', descripcion: '                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quod iure illum id numquam assumenda vel commodi, laboriosam facere. Possimus animi debitis officiis aperiam quam temporibus excepturi quas, minima dignissimos.' }
    ];


    return (
        <section className='mt-20'>
            <h4 className='text-center text-4xl font-semibold'>Our Services</h4>
            <article className='grid grid-cols-1 gap-4 px-4 py-4 md:grid-cols-2'>
                {servicios.map((servicio, index) => (
                    <div key={index} className='flex flex-col p-4 bg-white shadow-md rounded-md max-w-md mx-auto'>
                        <div className='flex items-center space-x-4'>
                            <div className='text-4xl'>
                                {servicio.icon}
                            </div>
                            <div>
                                <h5 className='text-blue-500 text-2xl font-semibold'>{servicio.title}</h5>
                                <p className='text-left'>{servicio.descripcion}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </article>
        </section>


    )
}

export default Services