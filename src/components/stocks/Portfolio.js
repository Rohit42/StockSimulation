import React from 'react'
import StockCard from './StockCard'
import { Link } from 'react-router-dom'
import StockDetails from './StockDetails';

const Portfolio = ({stocks, stock_data, Timer}) => {

  return (
    <div className="stock-list section">
      { stocks && Object.keys(stocks).map((key, index) => {
        return (
          <StockDetails name = {key} quantity={stocks[key]}></StockDetails>

          // <StockCard Timer={Timer} quantity={stocks[key]} name = {key} stock_info = {stock_data ? stock_data[key] : null}  />
        )
      })}  
    </div>
  )
}

export default Portfolio;
