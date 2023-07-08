import React, { useState, useLayoutEffect, useRef, useEffect } from 'react';
import comingSoon from "../imgs/coming-soon.jpg"
import { ProjectCard } from '../components/Directory/ProjectCard';
import error404  from "../imgs/404.jpg"

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
    var cardContainerClassNames = (isVertical ? "flex-col": "flex-row") + ' justify-center items-center flex w-full h-full'
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
        } else if (width < 1000) {
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
        if (height < 900) {
            sizeStyle["height"] = "400px"
            sizeStyle["flex-basis"] = "300px"
            textTailwind = "text-xs"
            titleTailwind = "text-lg"
        } else if (height < 1200) {
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
        <div className='flex justify-center items-center h-screen w-full bg-brown-wood-1 bg-cover bg-center p-10'>
            <div className={'flex justify-center items-center bg-white/30 rounded-2xl lg:rounded-[50px] h-full w-full ' + (isVertical ? "px-10" : "py-10")}>
                <div className={cardContainerClassNames}>
                    <ProjectCard 
                        Title="Back To The Main Page"
                        Vertical = {isVertical}
                        SizeStyle = {sizeStyle} 
                        TextTailwind={textTailwind}
                        TitleTailwind={titleTailwind}
                        Navigate={true}
                        Image={error404}
                        Link="/"
                        Description={
                            <>
                                <span className='font-bold'>Overview: </span> Sorry this project is not complete...
                            </>
                        }
                        Progress={
                            <span className='font-bold'>Not Complete</span> 
                        }
                    >
                    </ProjectCard>
                </div>
            </div>
        </div>
	);
};

export default Home;
