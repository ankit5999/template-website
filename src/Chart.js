import React from 'react'
import { Line } from 'react-chartjs-2';

function Chart() {
    return (
        <>
        <div>
            <Line 
            data={{
                labels:[2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
                datasets:[{
                    label: "Social Media Growth",
            data: [10, 20, 15, 30, 20, 40, 30, 60," "],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
            ],
            borderWidth: 1,
                },
                ]
            }}
                height={400}
                width={600}
                options={{
                    maintainAspectRatio:false,
                legend: {
         display: false 
      },
      
   
                }}
                
            />
            
        </div>
        <h2>Uses of socila media</h2>
        </>
    )
}

export default Chart;
