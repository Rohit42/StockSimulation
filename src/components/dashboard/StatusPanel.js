import React from 'react'
import moment from 'moment'

const StatusPanel = (props) => {
    var liquid = props.liquid;
    var total = liquid;
    const stocks = props.stocks;
    const stock_data = props.stock_data;
    for (var key in stocks) {
        if(stock_data) {
            var price_array = stock_data[key].price;
            total += price_array[props.Timer] * stocks[key]
        }
    }
    liquid =  liquid ? liquid.toFixed(2) : liquid;
    total = total ? total.toFixed(2): total;
    return (
    <div className="section">
    <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Current Portfolio</span>
            <p>Liquid: {liquid}</p>
            <p>Total:  {total}</p>
        </div>
      </div>
    </div>
  )
}

export default StatusPanel
