import React, {useEffect, useState} from 'react';
import LineChartTemplate from './gastimater';
import Dropdown from './dropdown';

const GastimaterMainPage = () => {
	return (
        <div>
            <div className='flex h-screen w-full'>
                <div className='m-auto'>
                    <div className='text-4xl text-center pb-3'>
                        ETH Gastimater
                    </div>
                    <div className='text-xl text-center'>
                        A semi-crystal ball on ETH gas prices in the near future
                    </div>
                </div>
            </div>
            <div className="h-screen w-full px-5">
                <LineChartTemplate />
            </div>
            <div className='flex h-screen w-full'>
                <Dropdown />
            </div>
        </div>
	);
};

export default GastimaterMainPage
