import React from 'react';
import { Tabs, Tab } from 'react-bootstrap'
import CityImage from './CityImage';
import POI from './POI';
import './TabCategories.css';

export default function TabCategories(props) {
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
                <ul className="salaryList">
                    <h4><strong>click on a job's title to check for it's availability in {props.city}</strong></h4>
                    {props.salaryList}
                    <p>** Salary range based on salaries between the 25th and 75th percentiles in respective profession</p>
                </ul>
            </Tab>
            <Tab eventKey="Points of Interest" title="POI">
                <POI lat={props.lat}
                    long={props.long}/>
            </Tab>
            <Tab eventKey="TBD" title="TBD">
            </Tab>
        </Tabs>
    )
}

