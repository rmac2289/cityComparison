import React from "react";

import CityImage from './CityImage';
import POI from './POI';




class Tabs extends React.Component {
    static defaultProps = { tabs: [] };
    state = {
      currentTabIndex: 0
    }
    cityImageContent = <><CityImage
    image={ this.props.webPhoto }
    hidden={ this.props.webPhoto }/>
    <ul className="mainList">{ this.props.scoresList }</ul></>

    tabs = [
        { name: 'Scores',
          content: this.cityImageContent },
        { name: 'Salaries',
          content: 'Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
        { name: 'POI',
          content: 'Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur.' },
      ];
    handleButtonClick = (index) => {
      this.setState({ currentTabIndex: index })
    }
    renderButtons() {
        return this.tabs.map((tab, index) => (
          <button key={index} onClick={() => this.handleButtonClick(index)}>
            {tab.name}
          </button>
        ))
      }
      renderContent() {
        const currentTab = this.tabs[this.state.currentTabIndex]
        return (
          <div className='content'>
            {currentTab.content}
          </div>
        )
      }
      render() {
        return (
          <div className="tabs">
            {this.renderButtons()}
            {!!this.tabs.length && this.renderContent()}
          </div>
        )
      }
}

export default Tabs;