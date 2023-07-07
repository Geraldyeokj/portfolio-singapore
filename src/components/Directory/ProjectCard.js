import React, { useState } from 'react';
import { redirect, useLocation, useNavigate } from "react-router-dom";
import comingSoon from "../../imgs/comingSoon.jpg"

export const ProjectCard = (props) => {
    const navigate = useNavigate();
    const locationState = useLocation();
	console.log("props", props);
    const cardClassNames = `flex align-middle aspect-[3/4] bg-amber-400 rounded-2xl mx-5 outline outline-amber-600 hover:outline-4 hover:outline-blue-500 text-amber-900`

	return (
		<div 
            className={cardClassNames}
            onClick={() => {
                (props.Navigate ? navigate(`${props.Link}`) : window.location.href = props.Link)
            }}
        >
            
            <div className='flex flex-col h-full p-0 m-0 rounded-2xl shadow-xl'>
                <div className='h-10 px-4 pt-2 bg-amber-300 rounded-t-2xl'>
                    <div className='h-1 text-xl'>
                        {props.Title}
                    </div>
                </div>
                <div className='h-3/6 px-4 bg-amber-300 overflow-hidden'>
                    <img 
                        className="w-full h-full object-fill rounded-2xl" 
                        src={props.Image} 
                        alt='<a href="https://www.freepik.com/free-vector/coming-soon-construction-yellow-background-design_8562867.htm#query=coming%20soon&position=23&from_view=keyword&track=ais">Image by starline</a> on Freepik'>
                    </img>
                </div>
                <div className='h-3/6 pb-4 px-4 bg-amber-300 rounded-b-2xl'>
                    <div className='relative w-full h-full bg-amber-100 rounded-2xl text-lg mt-2 p-2 text-amber-900'>
                        <div className='text-xs md:text-sm lg:text-md'>
                            {props.Description}
                        </div>
                        <div className='absolute bottom-1 right-2 text-xs md:text-sm lg:text-md text-right'>
                            <span className='font-bold'>{props.Progress}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	);
};
