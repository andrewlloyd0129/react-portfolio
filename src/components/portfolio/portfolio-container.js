import React, { Component } from "react";
import axios from 'axios';

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {  
  constructor() {
    super();
    this.state = {
      pageTitle: "Welcome to my house",
      isLoading: false,
      data: []
    };
    this.handleFilter = this.handleFilter.bind(this);
  }

  handleFilter(filter) {
    this.setState({
      data: this.state.data.filter(x => {
        return x.category === filter;
      })
    })
  }

  getPortfolioItems() {
    axios.get("https://andrewlloyd0129.devcamp.space/portfolio/portfolio_items")
      .then(response => {
        this.setState({
          data: response.data.portfolio_items
        })
      })
    .catch (function (error) {  
      // handle error 
      console.log(error); 
    });
  }
    
  portfolioItems() { 
    return this.state.data.map(item => {
      return <PortfolioItem
        title={item.name}
        url={item.url}
        slug={item.name}
        key={item.id}
      />; 
    })   
  }
  
  componentDidMount() {
    this.getPortfolioItems();
  }
    
  render() {
    if (this.state.isLoading) {
      return <div>Loading....</div>
    }
    return (
      <div>
        <h3> {this.state.pageTitle} </h3>

        <button onClick={() => this.handleFilter('eCommerce')}>
          eCommerce
        </button>
        <button onClick={() => this.handleFilter('Scheduling')}>
          Scheduling
        </button>
        <button onClick={() => this.handleFilter('Enterprise')}>
          Enterprise
        </button>

        {this.portfolioItems()}
      </div>
    );    
  }
}
