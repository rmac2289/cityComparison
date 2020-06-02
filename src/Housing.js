import React from 'react';

export default function Housing(props) {
    return (
        <div>
            <div id="zillow-large-search-box-widget-container" ><h2 id="h2">Find Homes</h2><div id="float-right"><a href="https://www.zillow.com/" target="_blank" rel="nofollow noopener noreferrer">
                <img alt="Zillow Real Estate Information" style={{ border: 0 }} src="https://www.zillow.com/widgets/GetVersionedResource.htm?path=%2Fstatic%2Fimages%2Fpowered-by-zillow.gif"></img></a></div>
                <iframe title="zillow" scrolling="no" src={`https://www.zillow.com/widgets/search/LargeSearchBoxWidget.htm?did=zillow-large-search-box-iframe-widget&type=iframe&rgname=${props.city}+${props.state}&shvi=yes`} width="430" frameBorder="0" height="400"></iframe><table id="zillow-tnc-widget-footer-links" width="100%" ><tbody style={{ margin: 0, padding: 0 }}><tr style={{ margin: 0, padding: 0 }}><td id="td" >QUICK LINKS:</td></tr>
                    <tr><td style={{ margin: 0, padding: 0 }}><span id="widgetFooterLink" className="regionBasedLink"><a id="locationLink" href={`https://www.zillow.com/${props.city}-${props.state}/`} target="_blank" rel="nofollow noopener noreferrer" ><span className="region">{props.city}</span> Real Estate Listing</a></span></td><td style={{ margin: 0, padding: 0 }}><span id="widgetFooterLink"><a id="mortgage-rates" href="https://www.zillow.com/mortgage-rates/" target="_blank" rel="nofollow noopener noreferrer">Mortgage Rates</a></span></td>
                        <td style={{ margin: 0, padding: 0 }}><span id="widgetFooterLink"><a id="refinance" href="https://www.zillow.com/refinance/" target="_blank" rel="nofollow noopenernoreferrer">Refinancing</a></span></td></tr>
                    <tr style={{ margin: 0, padding: 0 }}><td style={{ margin: 0, padding: 0 }}><span id="widgetFooterLink" className="regionBasedLink"><a id="foreclosures" href={`https://www.zillow.com/${props.city}-${props.state}/foreclosures/`} target="_blank" rel="nofollow noopener noreferrer"><span className="region">{props.city}</span> Foreclosures</a></span></td>
                        <td style={{ margin: 0, padding: 0 }}><span id="widgetFooterLink"><a id="calculator" href="https://www.zillow.com/mortgage-calculator/" target="_blank" rel="nofollow noopener noreferrer">Mortgage Calculators</a></span></td><td style={{ margin: 0, padding: 0 }}><span id="widgetFooterLink"><a id="rates" href="https://www.zillow.com/mortgage-rates/" target="_blank" rel="nofollow noopener noreferrer">Purchase Loans</a></span></td></tr></tbody></table></div>
        </div>
    )
}