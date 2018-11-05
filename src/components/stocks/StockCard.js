import React from 'react'
import StockDetails from './StockDetails';

const StockCard = ({name, quantity, stock_info, Timer}) => {
  var q_s = "Quantity: " + quantity;
  var t_s = "Ticker: " + (stock_info ? stock_info.ticker : null);
  var p_s = "Price: " + (stock_info ? stock_info.price[Timer].toFixed(2) : null);
  return (
    <div className="card z-depth-0 project-summary">
      {/* <StockDetails name = {name}></StockDetails> */}

      <div className="card-content grey-text text-darken-3">
        <span className="card-title ">{name}</span>
        <p className="grey-text">{t_s}</p>
        <p className="grey-text">{q_s}</p>
        <p className="grey-text">{p_s}</p>

      </div>

    </div>
  )
}

export default StockCard;
