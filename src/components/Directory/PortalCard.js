import React, { useState } from 'react';
import { redirect, useLocation, useNavigate } from "react-router-dom";
import comingSoon from "../../imgs/comingSoon.jpg"
import staticportal from "../../imgs/staticportal.png"

export const PortalCard = (props) => {
    const navigate = useNavigate();
    //const locationState = useLocation();
	//console.log("props", props);
    const conditionalClasses = (props.Vertical ? "my-5" : "mx-5")
    const cardClassNames = conditionalClasses + ` flex bg-red-300 rounded-2xl ring ring-red-700 hover:ring-4 hover:ring-blue-500 text-red-950`
    console.log("cardClassNames", props.SizeStyle, cardClassNames);
	return (
		<div 
            className={cardClassNames}
            style={props.SizeStyle}
            onClick={() => {
                (props.Navigate ? navigate(`${props.Link}`) : window.location.href = props.Link)
            }}
        >
            <div className='flex flex-col h-full p-0 m-0 rounded-2xl shadow-xl w-full'>
                <div className='h-10 px-4 pt-2 bg-red-300 rounded-t-2xl xl:pb-5 xl:px-5 xl:pt-3'>
                    <div className={'h-1 ' + props.TitleTailwind}>
                        {props.Title}
                    </div>
                </div>
                <div className={'h-3/6 px-4 bg-red-300 overflow-hidden ' + (props.Vertical ? "mt-3" : "xl:mt-3")}>
                    <img 
                        className="w-full h-full object-fill rounded-2xl" 
                        src={props.Image}
                        onError={({ currentTarget }) => {
                            currentTarget.onerror = null; // prevents looping
                            currentTarget.src=staticportal;
                          }}
                    >
                    </img>
                </div>
                <div className='h-3/6 pb-4 px-4 bg-red-300 rounded-b-2xl lg:rounded-b-[40px]'>
                    <div className={'relative w-full h-full bg-red-100 rounded-2xl mt-2 p-2 text-red-900 lg:p-2 pt-1 ' + props.TextTailwind}>
                        {props.Description}
                        <div className='absolute bottom-1 text-right right-2 lg:right-5'>
                            <span className='font-bold'>{props.Progress}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	);
};
