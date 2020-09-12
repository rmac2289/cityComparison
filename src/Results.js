import React from "react";
import CityImage from "./CityImage";
import "./Results.css";
import {
  ResponsiveContainer,
  BarChart,
  Tooltip,
  Bar,
  XAxis,
  YAxis,
} from "recharts";

export default function TabCategories(props) {
  const salaries = props.salaryList;
  const data = salaries.map((v) => {
    const toStr = v.salary_percentiles.percentile_75.toString();
    const lowToStr = v.salary_percentiles.percentile_25.toString();
    const slicedNum = toStr[5] === "." ? toStr.slice(0, 5) : toStr.slice(0, 6);
    const slicedLow =
      lowToStr[5] === "." ? lowToStr.slice(0, 5) : lowToStr.slice(0, 6);
    return {
      name: v.job.title,
      Salary: [slicedLow, slicedNum],
    };
  });
  const CustomTooltip = ({ active, payload, label }) => {
    if (active) {
      let lowPayloadFormatted;
      let highPayloadFormatted;
      const lowArray = payload[0].value[0].split("");
      const highArray = payload[0].value[1].split("");

      lowArray.length === 5
        ? lowArray.splice(2, 0, ",")
        : lowArray.splice(3, 0, ",");
      highArray.length === 5
        ? highArray.splice(2, 0, ",")
        : highArray.splice(3, 0, ",");
      lowPayloadFormatted = lowArray.join("");
      highPayloadFormatted = highArray.join("");
      return (
        <div className="custom-tooltip">
          <p className="label-1">{label}</p>
          <p className="intro-1">
            {payload[0].name}: ${lowPayloadFormatted} - ${highPayloadFormatted}
          </p>
        </div>
      );
    }
    return null;
  };
  return (
    <div className="results">
      <div>
        <CityImage image={props.webPhoto} hidden={props.webPhoto} />
        <div id="report-card-box" className="subheader-box">
          <h2 className="subheader">Report Card</h2>
        </div>
        <ul className="mainList">{props.scoresList}</ul>
      </div>
      <div className="subheader-box">
        <h2 className="subheader">Job Market</h2>
      </div>
      <div className="salaries">
        <div className="chart-box">
          <h2 id="salary-header">estimated yearly salary ($)</h2>
          <ResponsiveContainer width="100%" minHeight={1600}>
            <BarChart
              margin={{ top: 0 }}
              barCategoryGap="15%"
              height={1600}
              data={data}
              layout="vertical"
            >
              <Tooltip
                offset={0}
                wrapperStyle={{ top: -75, left: 100, width: "250px" }}
                content={<CustomTooltip />}
              />
              <XAxis
                label={{ fill: "rgb(0,0,0,0.8)" }}
                domain={[0, 300000]}
                orientation="top"
                type="number"
              />
              <YAxis
                tickLine={false}
                width={190}
                axisLine={false}
                type="category"
                dataKey="name"
              />
              <Bar
                background={true}
                fill="rgba(100,0,0,0.6)"
                dataKey="Salary"
              />
            </BarChart>
          </ResponsiveContainer>
          <p className="range-p">
            **Range displayed is based on the the 25th to 75th percentile of
            salaries.
          </p>
        </div>
      </div>
    </div>
  );
}
