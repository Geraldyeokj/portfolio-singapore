import React, {useEffect, useState} from 'react';
import LineChartTemplate from './gastimater';
import Dropdown from './dropdown';
import GetNotified from './getnotified';

const GastimaterMainPage = () => {
	return (
        <div>
            <div className='flex h-screen w-full bg-gastimater bg-bottom bg-cover'>
                <div className='m-auto'>
                    <div className='text-4xl text-center pb-3 text-neutral-700'>
                        ETH Gastimater
                    </div>
                    <div className='text-xl text-center text-neutral-700'>
                        A semi-crystal ball on ETH gas prices in the near future
                    </div>
                </div>
            </div>
            <div className='h-40'>
            </div>
            <div className="h-screen w-full px-5">
                <LineChartTemplate />
            </div>
            <div className='h-40'>
            </div>
            <div className='flex h-screen w-full'>
                <Dropdown />
            </div>
            <div className='h-40'>
            </div>
            {/* <div className='flex h-screen w-full'>
                <GetNotified />
            </div>
            <div className='h-40'>
            </div> */}
        </div>
	);
};

export default GastimaterMainPage
