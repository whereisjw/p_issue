'use client'
import React from 'react'
import { Bar, BarChart, Legend,  ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

 

 interface props{
    frontend:number;
    backend:number;
    etc:number;
    
}  


 
const Chart = ({frontend,backend,etc}:props) => {
let data = 
[    {label:'FRONTEND',작성글:frontend},
    {label:'BACKEND',작성글:backend},
    {label:'ETC',작성글:etc}]



  return (
    <ResponsiveContainer width={'100%'} height={300}>  
  <BarChart data={data} >
            <XAxis dataKey="label"></XAxis>
            <YAxis></YAxis>
            <Tooltip />
  <Legend  />
            <Bar barSize={60} dataKey="작성글" fill="#8884d8"></Bar>
        </BarChart>
     </ResponsiveContainer> 
  )
}

export default Chart

 