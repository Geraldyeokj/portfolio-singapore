import React, { useEffect, useState } from 'react';
import { Collapse, Divider, Panel } from 'antd';
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

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
        <div className='p-5'>
            <div className='pb-3' onClick={() => onClick(1)}>
                <Collapse
                    size="large"
                    items={[
                        {
                        key: '1',
                        label: 'Step 1: Gas Price Data Wrangling',
                        children: <p>{text}</p>,
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
                        label: 'Step 2: Forecasting',
                        children: <p>{text}</p>,
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
                        label: 'Step 3: Delivery',
                        children: <p>{text}</p>,
                        },
                    ]}
                    activeKey={(thirdClicked ? 1 : '')}
                    onClick={() => onClick()}
                />
            </div>
        </div>
    )
};
export default Dropdown;