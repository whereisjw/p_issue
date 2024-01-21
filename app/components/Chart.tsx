'use client'
import React from 'react'
import { Bar, BarChart, Legend,  ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

interface props{
    open:number;
    inProgress:number;
    closed:number;
}

/* {
  OPEN
  IN_PROGRESS
  CLOSED
} */
const Chart = ({open,inProgress,closed}:props) => {
let data = 
[    {label:'OPEN',value:open},
    {label:'IN_PROGRESS',value:inProgress},
    {label:'CLOSED',value:closed}]



  return (
    <ResponsiveContainer width={'100%'} height={300}>  
  <BarChart data={data} >
            <XAxis dataKey="label"></XAxis>
            <YAxis></YAxis>
            <Tooltip />
  <Legend />
            <Bar barSize={60} dataKey="value" fill="#8884d8"></Bar>
        </BarChart>
     </ResponsiveContainer> 
  )
}

export default Chart

 