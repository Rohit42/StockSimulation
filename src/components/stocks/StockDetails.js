import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

import moment from 'moment'
import { Chart, Axis, Series, Tooltip, Cursor, Line } from "react-charts";

const StockDetails = (props) => {
  const { auth, stock_info, Timer } = props;
  if (!auth.uid) return <Redirect to='/signin' />
  if (stock_info) {
    var graph_data = Array.from(stock_info.price.entries());
    graph_data = graph_data.slice(0, Timer);
    return (
      <div className={ ""}>
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{stock_info.name}</span>
            <span className="card-title">{stock_info.price[Timer].toFixed(2)}</span>
            <p>{stock_info.ticker}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div className="chart_box">
              <Chart data={[
                  {
                    label: stock_info.name,
                    data: graph_data
                  },

                ]}
              >
                <Axis primary type="time" />
                <Axis type="linear" />
                <Cursor primary />
                <Cursor />
              <Series type={Line} />
              </Chart>
            </div>
          </div>
        </div>
      </div>
      
    )
  } else {
    return (
      <div className="container center">
        <p>Loading Stock...</p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  const name = ownProps.name ? ownProps.name : ownProps.match.params.id;
  const stock_data = state.firestore.data.stock_data;
  const stock_info = stock_data ? stock_data[name] : null;
  const Timer = stock_data ? stock_data["Game"]['Timer'] : null;


  return {
    stock_info: stock_info,
    auth: state.firebase.auth,
    Timer: Timer,
  }
}


export default compose(
  firestoreConnect([
    { collection: 'stock_data',
  }
  ]),
  connect(mapStateToProps)
)(StockDetails)
