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
                <div className='grid grid-cols-2 m-auto w-full'>
                    <div className='col-span-2 text-4xl text-center pb-3'>
                        How Our Gastimater Works
                    </div>
                    <div className='col-span-1'>
                        <Dropdown />
                    </div>
                    <div className='col-span-1'>
                        <div className='text-xl text-center pb-3'>
                            Image
                        </div>
                    </div>
                </div>
            </div>
        </div>
	);
};

export default GastimaterMainPage
