import React from 'react';
import { Tabs, Tab } from 'react-bootstrap'
import CityImage from './CityImage';
import './TabCategories.css';
import Housing from './Housing'
import { ResponsiveContainer, BarChart, Tooltip, Bar, XAxis, YAxis } from 'recharts';

const CustomTooltip = ({ active, payload, label }) => {
    if (active) {
      return (
        <div className="custom-tooltip">
          <p className="desc">{label}: ${payload[0].value.slice(0,-3)},{payload[0].value.slice(-3)}</p>
        </div>
      );
    }
    return null;
  };

export default function TabCategories(props) {
    const salaries = props.salaryList
    const data = salaries.map((v,i) => {
        const toStr = v.salary_percentiles.percentile_75.toString()
        const slicedNum = toStr[5] === "." ? toStr.slice(0,5):toStr.slice(0,6)
        return {
            "name": v.job.title,
            "low": v.salary_percentiles.percentile_25,
            "Salary": slicedNum
        }
    })
    return (
        <Tabs className="tabs" defaultActiveKey="scores" id="noanim-tab-example">
            <Tab eventKey="scores" title="Scores">
                <CityImage
                    image={ props.webPhoto }
                    hidden={ props.webPhoto }
                />
                <ul className="mainList">{ props.scoresList }</ul>
            </Tab>
            <Tab eventKey="Salaries" title="Salaries">
                <div className="chart-box">
                    <h2 id="salary-header">estimated yearly salary ($)</h2>
                <ResponsiveContainer  width='100%' minHeight={1600}>
                <BarChart margin={{top: 0}} barCategoryGap="15%" height={1600} data={data} layout="vertical">
                <XAxis label={{fill: "rgb(0,0,0,0.8)"}} domain={[0,300000]}orientation="top" type="number"/>
                <YAxis tickLine={false} width={190} axisLine={false} type="category" dataKey="name"/>
                <Bar background={{fill: "rgb(0,0,0,0.1"}} fill="rgba(0,0,0,0.6)" dataKey="Salary" />
                <Tooltip content={<CustomTooltip/>}/>
                </BarChart>
                </ResponsiveContainer>
                </div>
            </Tab>
            <Tab eventKey="Housing" title="Housing">
                <Housing city={props.city} state={props.state}/>
            </Tab>
        </Tabs>
    )
}

