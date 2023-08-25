import React, {useEffect, useState} from 'react';
import { LineChart1 } from '../../charts/lineChart1';
//import { data } from './lineChartTestData';
// import { data } from './lineChartTestData2'
import { MyResponsiveLine } from './nivoLine2';

const fetchYhat = () => {
    return fetch("https://x2r988wzd4.execute-api.us-east-2.amazonaws.com/api/v1/predictions/yhat")
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log(data)
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
      })
  }



const LineChartTemplate = () => {
    
    const [data, setData] = useState([]);
    useEffect(() => {
        fetchYhat().then(info => {
            console.log("RES", info)
            setData(info);
        })
    }, []);
    console.log("DATA ================================================")
    
    
    /*
    const data = [{
        id: 'fake corp. A',
        data: [{
          x: 0,
          y: 7
        }, {
          x: 1,
          y: 5
        }, {
          x: 2,
          y: 11
        }, {
          x: 3,
          y: 9
        }, {
          x: 4,
          y: 13
        }, {
          x: 7,
          y: 16
        }, {
          x: 9.5,
          y: 12.333
        }]
    }];
    */
    
    console.log("data", data)
	return (
        <>
            { data.length ? 
                <div className='flex flex-col justify-center'>
                    <div className='flex flex-col justify-center items-center py-10'>
                        <div className="h-screen w-full">
                            {MyResponsiveLine({data})}
                        </div>
                    </div>
                </div> :
                "LOADING" 
            }
        </>
	);
};


{/* <>
            { data.length ? 
                <div className='flex flex-col justify-center'>
                    <div className='flex flex-col justify-center items-center py-10'>
                        <div className="h-screen w-full">
                            {LineChart1({data})}
                        </div>
                    </div>
                </div> :
                "LOADING" 
            }
        </> */}
export default LineChartTemplate;
