import React, { useState, useLayoutEffect, useRef, useEffect } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import comingSoon from "../imgs/coming-soon.jpg"
import { ProjectCard } from '../components/Directory/ProjectCard';
import coverLetterRobot  from "../imgs/cover-letter-robot.jpg"
import bananas from "../imgs/bananas.jpg"
import geraldYeo from "../imgs/gerald-yeo-professional-pic.jpg"
import sampleCad from "../imgs/sampleCad.png"
import forecast from "../imgs/forecast.png"
import { PortalCard } from '../components/Directory/PortalCard';
import redportalresized from "../imgs/red-portal-resized.gif"

function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
  }

const Home = (props) => {
    //const navigate = useNavigate();
    //const locationState = useLocation();
	//console.log("props", locationState);

    const [width, height] = useWindowSize();
    var aspectRatio = width / height
    var isVertical = (aspectRatio < 1.2 ? true : false)
    var cardContainerClassNames = (isVertical ? "flex-col items-center overflow-x-scroll": "flex-row items-center overflow-y-scroll") + ' flex w-full h-full'
    console.log("window size", width, height, "isVertical", isVertical, cardContainerClassNames)
    var sizeStyle = {
        "flex-grow": "0",
        "flex-shrink": "0",
        "align-content": "start",
    }
    var textTailwind
    var titleTailwind
    if (isVertical) {
        if (width < 600) { 
            sizeStyle["width"] = "300px"
            sizeStyle["flex-basis"] = "400px"
            textTailwind = "text-xs"
            titleTailwind = "text-xl"
        } else if (width < 800) { 
            sizeStyle["width"] = "250px"
            sizeStyle["flex-basis"] = "350px"
            textTailwind = "text-xs"
            titleTailwind = "text-xl"
        }  else if (width < 1000) {
            sizeStyle["width"] = "400px"
            sizeStyle["flex-basis"] = "600px"
            textTailwind = "text-xl"
            titleTailwind = "text-2xl"
        } else {
            sizeStyle["width"] = "600px"
            sizeStyle["flex-basis"] = "800px"
            textTailwind = "text-3xl"
            titleTailwind = "text-3xl"
        }
    } else {
        if (height < 600) {
            sizeStyle["height"] = "400px"
            sizeStyle["flex-basis"] = "300px"
            textTailwind = "text-xs"
            titleTailwind = "text-lg"
        } else if (height < 1000) {
            sizeStyle["height"] = "500px"
            sizeStyle["flex-basis"] = "375px"
            textTailwind = "text-base"
            titleTailwind = "text-xl"
        } else {
            sizeStyle["height"] = "800px"
            sizeStyle["flex-basis"] = "600px"
            textTailwind = "text-3xl"
            titleTailwind = "text-3xl"
        }
    }
    
    return (
        <div className='flex justify-center items-center h-screen w-full bg-brown-wood-1 bg-cover bg-center p-5 md:p-10'>
            <div className={'flex justify-center items-center bg-white/30 rounded-2xl lg:rounded-[50px] h-full w-full ' + (isVertical ? "px-3 md:px-10" : "py-3 md:py-10")}>
                <div className={cardContainerClassNames}>
                    <ProjectCard 
                        Title="ETH Guesstimater"
                        Vertical = {isVertical}
                        SizeStyle = {sizeStyle} 
                        TextTailwind={textTailwind}
                        TitleTailwind={titleTailwind}
                        Navigate={true}
                        Image={forecast}
                        Link="/ethgastimater"
                        Description={
                            <>
                                <span className='font-bold'>Overview: </span> A web app that aims to help you reduce ETH transaction costs by predicting ETH gas prices in the next 12 hours.
                                <div className='pt-2'></div>
                                <span className='font-bold'>Tech Stack: </span> React, Python, JavaScript, Tailwind, PostgreSQL, EC2, RDS, CloudFront.
                            </>
                        }
                        Progress={
                            <span className='font-bold'>70% Complete</span> 
                        }
                    >
                    </ProjectCard>
                    <ProjectCard 
                        Title="GoingBananas"
                        Vertical = {isVertical}
                        SizeStyle = {sizeStyle} 
                        TextTailwind={textTailwind}
                        TitleTailwind={titleTailwind}
                        Navigate={false}
                        Image={bananas}
                        Link="https://goingbananasv7.herokuapp.com/"
                        Description={
                            <>
                                <span className='font-bold'>Overview: </span> A web application that detects ripe bananas with TensorFlow and utilizes user location data to recommend shops selling ripe bananas.
                                <div className='pt-1'></div>
                                <span className='font-bold'>Tech Stack: </span> HTML, CSS, JavaScript, EJS, Node.js, Express.js, MongoDB Atlas.
                                <div className='pt-1'></div>
                                <div className='font-bold text-center'>UNMAINTAINED</div>
                            </>
                        }
                        Progress={
                            <span className='font-bold'>100% Complete</span> 
                        }
                    >
                    </ProjectCard>
                    <ProjectCard 
                        Title="Cover Letter Generator"
                        Vertical = {isVertical}
                        SizeStyle = {sizeStyle} 
                        TextTailwind={textTailwind}
                        TitleTailwind={titleTailwind}
                        Navigate={false}
                        Link="https://coverletterv1.herokuapp.com/"
                        Image={coverLetterRobot}
                        Description={
                            <>
                                <span className='font-bold'>Overview: </span> Generates cover letters cost-effectively with OpenAI’s GPT-3 model and custom prompts given a user’s resume and a job description.
                                <div className='pt-1'></div>
                                <span className='font-bold'>Tech Stack: </span> (Front-end) React, JavaScript.
                                <div className='pt-1'></div>
                                <div className='font-bold text-center'>UNMAINTAINED</div>
                            </>
                        }
                        Progress={
                            <span className='font-bold'>100% Complete</span> 
                        }
                    >
                    </ProjectCard>
                    <ProjectCard 
                        Title="Gerald's LinkedIn"
                        Vertical = {isVertical}
                        SizeStyle = {sizeStyle} 
                        TextTailwind={textTailwind}
                        TitleTailwind={titleTailwind}
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
                    <ProjectCard 
                        Title="Liquid Magic"
                        Vertical = {isVertical}
                        SizeStyle = {sizeStyle} 
                        TextTailwind={textTailwind}
                        TitleTailwind={titleTailwind}
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
                </div>
            </div>
        </div>
	);
};

export default Home;
