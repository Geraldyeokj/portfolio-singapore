import React, { useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import comingSoon from "../imgs/coming-soon.jpg"
import { ProjectCard } from '../components/Directory/ProjectCard';
import coverLetterRobot  from "../imgs/cover-letter-robot.jpg"
import bananas from "../imgs/bananas.jpg"
import geraldYeo from "../imgs/gerald-yeo-professional-pic.jpg"

const Home = (props) => {
    const navigate = useNavigate();
    const locationState = useLocation();
	console.log("props", locationState);

    
	return (
		<div className='flex flex-col justify-center items-center h-screen w-full bg-brown-wood-1 bg-cover bg-center p-10 '>
            <div className='flex flex-col justify-center items-center bg-white/30 h-full w-full rounded-2xl'>
                <div className='flex flex-row w-full h-full p-10 overflow-x-scroll'>
                    <ProjectCard 
                        Title="ETH Guesstimater"
                        Navigate={true}
                        Image={comingSoon}
                        Link="/portfolio"
                        Description={
                            <>
                                <span className='font-bold'>Overview: </span> A web app that lets you know when you should make transactions in ETH to reduce gas fees.
                                <div className='pt-2'></div>
                                <span className='font-bold'>Tech Stack: </span> React, Python, JavaScript, CRA, Tailwind, MongoDB.
                            </>
                        }
                        Progress={
                            <span className='font-bold'>50% Complete</span> 
                        }
                    >
                    </ProjectCard>
                    <ProjectCard 
                        Title="Liquid Magic"
                        Navigate={true}
                        Image={comingSoon}
                        Link="/liquid-magic"
                        Description={
                            <>
                                <span className='font-bold'>Overview: </span> A market-making website for Magic The Gather Trading Cards with a secret ingredient - liquidity.
                                <div className='pt-2'></div>
                                <span className='font-bold'>Tech Stack: </span> (Front-end) React, TypeScript, Next.js, Tailwind. (Back-end) Typescript, NestJs, PostgreSQL, EC2, RDS.
                            </>
                        }
                        Progress={
                            <span className='font-bold'>10% Complete</span> 
                        }
                    >
                    </ProjectCard>
                    <ProjectCard 
                        Title="Cover Letter Generator"
                        Navigate={false}
                        Link="https://coverletterv1.herokuapp.com/"
                        Image={coverLetterRobot}
                        Description={
                            <>
                                <span className='font-bold'>Overview: </span> Generates cover letters cost-effectively with OpenAI’s GPT-3 model and custom prompts given a user’s resume and a job description.
                                <div className='pt-2'></div>
                                <span className='font-bold'>Tech Stack: </span> (Front-end) React, JavaScript.
                                <div className='pt-2'></div>
                                <div className='font-bold text-center text-xl'>UNMAINTAINED</div>
                            </>
                        }
                        Progress={
                            <span className='font-bold'>100% Complete</span> 
                        }
                    >
                    </ProjectCard>
                    <ProjectCard 
                        Title="GoingBananas"
                        Navigate={false}
                        Image={bananas}
                        Link="https://goingbananasv7.herokuapp.com/"
                        Description={
                            <>
                                <span className='font-bold'>Overview: </span> A web application that detects ripe bananas with TensorFlow and utilizes user location data to recommend shops selling ripe bananas.
                                <div className='pt-2'></div>
                                <span className='font-bold'>Tech Stack: </span> HTML, CSS, JavaScript, EJS, Node.js, Express.js, MongoDB Atlas
                                <div className='pt-2'></div>
                                <div className='font-bold text-center text-xl'>UNMAINTAINED</div>
                            </>
                        }
                        Progress={
                            <span className='font-bold'>100% Complete</span> 
                        }
                    >
                    </ProjectCard>
                    <ProjectCard 
                        Title="Gerald's LinkedIn"
                        Navigate={false}
                        Image={geraldYeo}
                        Link="https://www.linkedin.com/in/gerald-yeo-934099187/"
                        Description={
                            <>
                                <span className='font-bold'>Overview: </span> Come and take a look at my LinkedIn profile!
                                <div className='pt-2'></div>
                                <span className='font-bold'>Tech Stack: </span> Unfortunately, I did not design LinkedIn.
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

export default Home;
