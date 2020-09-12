import React from "react";
import "./Salaries.css";

function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

function Salaries(props) {
  return (
    <li id="listItem">
      <h2 id="name">
        <a
          id="jobLink"
          target="_blank"
          rel="noopener noreferrer"
          href={`https://www.indeed.com/jobs?q=${props.jobName}&l=${props.jobCity}`}
        >
          {props.jobName}
        </a>
      </h2>
      <p id="salary">
        ${formatNumber(Math.round(props.jobSalary25))} to $
        {formatNumber(Math.round(props.jobSalary75))}
      </p>
    </li>
  );
}

export default Salaries;
