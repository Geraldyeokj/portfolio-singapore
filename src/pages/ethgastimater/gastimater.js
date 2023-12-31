import React, {useEffect, useState} from 'react';
import { MyResponsiveLine } from './nivoLine2';
import { Button, Space } from 'antd';

const fetchYhat = () => {
    try {
        const res = fetch("https://x2r988wzd4.execute-api.us-east-2.amazonaws.com/api/v1/predictions/yhat")
        .then(response => {
            return response.json()
        })
        .then(data => {
            //console.log(data)
            try {
                const ret_arr = [
                    {
                        "id": "Predicted",
                        "color": "hsl(249, 87%, 50%)",
                        "data": []
                    },
                    {
                        "id": "Actual",
                        "color": "hsl(180, 87%, 59%)",
                        "data": []
                    }
                ];
                data.forEach(element => {
                    const pot_x = Number(element[0])
                    const pot_y = Number(element[1])
                    if (!(isNaN(pot_x) || isNaN(pot_y))) {
                        ret_arr[0].data.push({
                            x: pot_x,
                            y: pot_y
                        });
                    }
                    const pot_actl_x = Number(element[0])
                    const pot_actl_y = Number(element[2])
                    if (!(isNaN(pot_actl_x) || isNaN(pot_actl_y) || pot_actl_y == 0)) {
                        ret_arr[1].data.push({
                            x: pot_actl_x,
                            y: pot_actl_y
                        });
                    }
                });
                return ret_arr;
            } catch {
                return [false];
            }
        })
        return res;
    } catch (err) {
        return [false];
    }
  }

const LineChartTemplate = () => {
    const [data, setData] = useState([]);
    const [lastUpdated, setLastUpdated] = useState();
    const fetchMetrics = () => {
        // retrieve and then setData()
        fetchYhat().then(info => {
            console.log("RES", info)
            setData(info);
            const today = new Date();
            const time = today.getHours() + ":" 
            + ((today.getMinutes() < 10) ? "0" + today.getMinutes() : today.getMinutes()) + ":" 
            + ((today.getSeconds() < 10) ? "0" + today.getSeconds() : today.getSeconds());
            setLastUpdated(time);
            
        })
    }
    useEffect(() => {
        fetchMetrics();
    }, []);

	return (
        <>
            { data.length ?
                <div className="h-screen w-full py-14">
                    <div className='text-center text-3xl text-neutral-700'>
                        Estimated Gas Prices For The Next 12 Hours
                    </div>
                    {data[0] ? MyResponsiveLine({data}) : "Unable to retrieve data :/"}
                    <div className='flex flex-row justify-end items-start w-full'>
                        <Button 
                            className='justify-end items-start'
                            onClick={() => {fetchMetrics()}}
                        >
                            Refresh
                        </Button>
                        <div className='items-center text-center pb-5 pr-5 pl-5 text-neutral-700'>
                            Last Updated: {lastUpdated}
                        </div>
                    </div>
                </div>
                :
                <div className='flex h-screen w-full'>
                    <div className='m-auto'>
                        <div className='text-4xl text-center pb-3'>
                            LOADING...
                        </div>
                    </div>
                </div>
            }
        </>
	);
};

export default LineChartTemplate;
