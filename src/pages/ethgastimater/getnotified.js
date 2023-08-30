import React, { useEffect, useState } from 'react';
import { Collapse, Divider, Panel } from 'antd';

const GetNotified = () => {
    const [firstClicked, setFirstClicked] = useState(true);
    const [secondClicked, setSecondClicked] = useState(false);
    const [thirdClicked, setThirdClicked] = useState(false);
    return (
        <div className='m-auto w-full md:w-3/4'>
            <div className='col-span-2 text-3xl text-center pt-10 pb-3 text-neutral-700'>
                Get Notified When Your Ideal Gas Price Is Reached
            </div>
        </div>
        
    )
};
export default GetNotified;