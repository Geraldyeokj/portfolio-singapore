import React, { useState } from 'react';
import { redirect, useLocation, useNavigate } from "react-router-dom";
import comingSoon from "../../imgs/comingSoon.jpg"

export const ProjectCard = (props) => {
    const navigate = useNavigate();
    //const locationState = useLocation();
	//console.log("props", props);
    const conditionalClasses = (props.Vertical ? "my-5" : "mx-5")
    const cardClassNames = conditionalClasses + ` flex bg-amber-300 rounded-2xl outline outline-amber-600 hover:outline-4 hover:outline-blue-500 text-amber-900`
    console.log("cardClassNames", props.SizeStyle, cardClassNames);
	return (
		<div 
            className={cardClassNames}
            style={props.SizeStyle}
            onClick={() => {
                (props.Navigate ? navigate(`${props.Link}`) : window.location.href = props.Link)
            }}
        >
            <div className='flex flex-col h-full p-0 m-0 rounded-2xl shadow-xl'>
                <div className='h-10 px-4 pt-2 bg-amber-300 rounded-t-2xl xl:pb-5 xl:px-5 xl:pt-3'>
                    <div className={'h-1 ' + props.TitleTailwind}>
                        {props.Title}
                    </div>
                </div>
                <div className={'h-3/6 px-4 bg-amber-300 overflow-hidden ' + (props.Vertical ? "mt-3" : "xl:mt-3")}>
                    <img 
                        className="w-full h-full object-fill rounded-2xl" 
                        src={props.Image} 
                        alt='<a href="https://www.freepik.com/free-vector/coming-soon-construction-yellow-background-design_8562867.htm#query=coming%20soon&position=23&from_view=keyword&track=ais">Image by starline</a> on Freepik'>
                    </img>
                </div>
                <div className='h-3/6 pb-4 px-4 bg-amber-300 rounded-b-2xl lg:rounded-b-[40px]'>
                    <div className={'relative w-full h-full bg-amber-100 rounded-2xl mt-2 p-2 text-amber-900 lg:p-2 pt-1 ' + props.TextTailwind}>
                        <div className=''>
                            {props.Description}
                        </div>
                        <div className='absolute bottom-1 text-right right-2 lg:right-5'>
                            <span className='font-bold'>{props.Progress}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	);
};
