import React, { useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import comingSoon from "../imgs/comingSoon.jpg"
import { ProjectCard } from '../components/Directory/ProjectCard';

const PageNotFound= (props) => {
    const navigate = useNavigate();
    const locationState = useLocation();
	console.log("props", locationState);

	return (
		<div className='flex flex-col justify-center items-center h-screen w-full bg-brown-wood-1 bg-cover bg-center p-10 '>
            <div className='flex flex-col justify-center items-center bg-white/30 h-full w-full rounded-2xl'>
                <div className='text-4xl rounded-2xl p-3 mt-2 text-amber-900 bg-white/70 outline outline-amber-900'>
                    Sorry This Project Is Not Complete...
                </div>
                <div className='flex flex-row justify-center w-full h-full p-10 overflow-x-scroll'>
                    <ProjectCard 
                        Title="Back To The Main Page"
                        Navigate={true}
                        Link="/"
                        Description={
                            <>
                                <span className='font-bold'>Overview: </span> Have a look at all the other stuff I've built! 
                                <div className='pt-2'></div>
                                <span className='font-bold'>Tech Stack: </span> React, JavaScript, CRA, Tailwind, EC2.
                            </>
                        }
                        Progress={
                            <span className='font-bold'>100% Complete</span> 
                        }
                    >
                    </ProjectCard>
                </div>
            </div>
		</div>
	);
};

export default PageNotFound;
