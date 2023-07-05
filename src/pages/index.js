import React, { useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import comingSoon from "../imgs/comingSoon.jpg"

const Home = (props) => {
    const navigate = useNavigate();
    const locationState = useLocation();
	console.log("props", locationState);

    
	return (
		<div className='flex flex-col justify-center items-center h-screen w-full bg-orange-doggo bg-cover bg-center p-10 '>
            <div className='flex flex-col justify-center items-center bg-white/75 h-full w-full sm:rounded-none md:rounded-2xl'>
                <div className='text-4xl mt-5 mb-5 text-amber-900'>
                    Select A Project
                </div>
                <div className='grid grid-cols-3 w-full h-full pt-3'>
                    <div 
                        className='col-span-1 bg-amber-400 rounded-2xl ml-10 mb-10 mr-4 outline hover:outline-4 outline-amber-600 text-amber-900'
                        onClick={() => {
                            navigate("/portfolio")
                        }}
                    >
                        
                        <div className='flex flex-col w-full h-full p-0 m-0 rounded-2xl shadow-xl'>
                            <div className='h-10 px-4 pt-2 bg-amber-300 rounded-t-2xl'>
                                <div className='h-1 text-xl'>
                                    Gerald's Portfolio
                                </div>
                            </div>
                            <div className='h-3/6 px-4 bg-amber-300 overflow-hidden'>
                                <img 
                                    className="w-full h-full object-fill rounded-2xl" 
                                    src={comingSoon} 
                                    alt='<a href="https://www.freepik.com/free-vector/coming-soon-construction-yellow-background-design_8562867.htm#query=coming%20soon&position=23&from_view=keyword&track=ais">Image by starline</a> on Freepik'>
                                </img>
                            </div>
                            <div className='h-3/6 pb-4 px-4 bg-amber-300 rounded-b-2xl'>
                                <div className='w-full h-full bg-amber-100 rounded-2xl text-lg mt-2 p-2 text-amber-900'>
                                    Gerald's Personal portfolio
                                </div>
                            </div>
                        </div>
                    </div>
                    <div 
                        className='col-span-1 bg-amber-400 rounded-2xl mx-6 mb-10 outline hover:outline-4 outline-amber-600 text-amber-900'
                        onClick={() => {
                            navigate("/portfolio")
                        }}
                    >
                        
                        <div className='flex flex-col w-full h-full p-0 m-0 rounded-2xl shadow-xl'>
                            <div className='h-10 px-4 pt-2 bg-amber-300 rounded-t-2xl'>
                                <div className='h-1 text-xl'>
                                    Gerald's Portfolio
                                </div>
                            </div>
                            <div className='h-3/6 px-4 bg-amber-300 overflow-hidden'>
                                <img 
                                    className="w-full h-full object-fill rounded-2xl" 
                                    src={comingSoon} 
                                    alt='<a href="https://www.freepik.com/free-vector/coming-soon-construction-yellow-background-design_8562867.htm#query=coming%20soon&position=23&from_view=keyword&track=ais">Image by starline</a> on Freepik'>
                                </img>
                            </div>
                            <div className='h-3/6 pb-4 px-4 bg-amber-300 rounded-b-2xl'>
                                <div className='w-full h-full bg-amber-100 rounded-2xl text-lg mt-2 p-2 text-amber-900'>
                                    Gerald's Personal portfolio
                                </div>
                            </div>
                        </div>
                    </div>
                    <div 
                        className='col-span-1 bg-amber-400 rounded-2xl mx-10 mb-10 mr-10 ml-4 outline hover:outline-4 outline-amber-600 text-amber-900'
                        onClick={() => {
                            navigate("/portfolio")
                        }}
                    >
                        
                        <div className='flex flex-col w-full h-full p-0 m-0 rounded-2xl shadow-xl'>
                            <div className='h-10 px-4 pt-2 bg-amber-300 rounded-t-2xl'>
                                <div className='h-1 text-xl'>
                                    Liquid Magic
                                </div>
                            </div>
                            <div className='h-3/6 px-4 bg-amber-300 overflow-hidden'>
                                <img 
                                    className="w-full h-full object-fill rounded-2xl" 
                                    src={comingSoon} 
                                    alt='<a href="https://www.freepik.com/free-vector/coming-soon-construction-yellow-background-design_8562867.htm#query=coming%20soon&position=23&from_view=keyword&track=ais">Image by starline</a> on Freepik'>
                                </img>
                            </div>
                            <div className='h-3/6 pb-4 px-4 bg-amber-300 rounded-b-2xl'>
                                <div className='w-full h-full bg-amber-100 rounded-2xl mt-2 p-2 text-amber-900'>
                                    <div>
                                        <span className='font-bold'>Overview: </span> A market-making website for Magic The Gather Trading Cards with a secret ingredient - liquidity.
                                    </div>
                                    <div className='pt-2'>
                                        <span className='font-bold'>Tech Stack: </span> (Front-end) React, TypeScript, Next.js, Tailwind. (Back-end) Typescript, NestJs, PostgreSQL, EC2, RDS.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
		</div>
	);
};

export default Home;
