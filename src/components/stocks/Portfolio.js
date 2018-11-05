import React from 'react'
import StockCard from './StockCard'
import { Link } from 'react-router-dom'

const Portfolio = ({stocks, stock_data, Timer}) => {

  return (
    <div className="stock-list section">
      { stocks && Object.keys(stocks).map((key, index) => {
        return (
          <Link to={'/stock/' + key} key={key}>
            <StockCard Timer={Timer} quantity={stocks[key]} name = {key} stock_info = {stock_data ? stock_data[key] : null}  />
          </Link>
        )
      })}  
    </div>
  )
}

export default Portfolio;
