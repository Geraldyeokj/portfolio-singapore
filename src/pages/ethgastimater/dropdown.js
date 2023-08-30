import React, { useEffect, useState } from 'react';
import { Collapse, Divider, Panel } from 'antd';
import aperiod from "../../imgs/aperiod.jpg";
import freshfromtheoven from "../../imgs/freshfromtheoven.jpg";
import postit from "../../imgs/post-it.jpg";

const Dropdown = () => {
    const [firstClicked, setFirstClicked] = useState(true);
    const [secondClicked, setSecondClicked] = useState(false);
    const [thirdClicked, setThirdClicked] = useState(false);
    
    function onClick(columnNumber) {
        console.log(firstClicked, secondClicked, thirdClicked);
        console.log("clicked", columnNumber);
        (1 === columnNumber ? setFirstClicked(true) : setFirstClicked(false));
        (2 === columnNumber ? setSecondClicked(true) : setSecondClicked(false));
        (3 === columnNumber ? setThirdClicked(true) : setThirdClicked(false));
    }    

    return (
        <div className='m-auto w-full md:w-3/4'>
            <div className='col-span-2 text-3xl text-center pt-10 pb-3 text-neutral-700'>
                How Our Gastimater Works
            </div>
            <div className='col-span-2'>
                <div className='p-5'>
                    <div className='pb-3' onClick={() => onClick(1)}>
                        <Collapse
                            size="large"
                            items={[
                                {
                                key: '1',
                                label: 'Step 1: Gas Price Data Wrangling',
                                children: 
                                <div className='grid grid-cols-2'>
                                    <div className='col-span-1 pr-3'>
                                        <div className='pb-1'>Our gas prices are retrieved from publicly available sources like etherscan.io. We make sure to update our gas price database every minute through a CRON job to keep our predictions up-to-date.</div>
                                        <div>We would do this at a even greater frequency but our tests have shown that this does not return significant predictive improvements.</div>
                                    </div>
                                    <div className='col-span-1 text-center pl-2'>
                                        <img className='rounded-lg overflow-hidden border-2' src={postit}></img>
                                    </div>
                                </div>,
                                },
                            ]}
                            activeKey={(firstClicked ? 1 : '')}
                        />
                    </div>
                    <div className='pb-3' onClick={() => onClick(2)}>
                        <Collapse
                            size="large"
                            items={[
                                {
                                key: '1',
                                label: 'Step 2: Forecasting Methods',
                                children:
                                <div className='grid grid-cols-2'>
                                    <div className='col-span-1 pr-3'>
                                        <div className='pb-1'>We conduct analyses based on the seasonality of ETH gas prices.</div>
                                        <div className='pb-1'>To estimate the period of ETH gas price seasons we smooth out gas price curves and identify peaks in this smoothened curve. We then take the average distance between peaks.</div>
                                        <div className='pb-1'>Since this estimation is not perfect, we use binary search on a band of periods around our estimated periods to identify the period that maximises our r-squared value.</div>
                                        <div>Finally, we use our identified period with a forecasting algorithm to derive the predicted values you see above.</div>
                                    </div>
                                    <div className='col-span-1 text-center pl-2'>
                                        <img className='rounded-lg overflow-hidden border-2' src={aperiod}></img>
                                    </div>
                                </div>,
                                },
                            ]}
                            activeKey={(secondClicked ? 1 : '')}
                        />
                    </div>
                    <div onClick={() => onClick(3)}>
                        <Collapse
                            size="large"
                            items={[
                                {
                                key: '1',
                                label: 'Step 3: Prediction Delivery',
                                children: 
                                <div className='grid grid-cols-2'>
                                    <div className='col-span-1 pr-3'>
                                        <div className='pb-1'>We devliver a freshly generated graph every two minutes.</div>
                                        <div className='pb-1'>This is due to constraints in the speed of our predictive algorithm.</div>
                                        <div>We hope to devliver fresh predictions every minute in the near future!</div>
                                    </div>
                                    <div className='col-span-1 text-center pl-2'>
                                        <img className='rounded-lg overflow-hidden border-2' src={freshfromtheoven}></img>
                                    </div>
                                </div>,
                                },
                            ]}
                            activeKey={(thirdClicked ? 1 : '')}
                            onClick={() => onClick()}
                        />
                    </div>
                </div>
            </div>
        </div>
        
    )
};
export default Dropdown;