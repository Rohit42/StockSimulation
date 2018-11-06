import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect, isLoaded } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

import moment from 'moment'
import { ResponsiveLine } from '@nivo/line'
import { Collapsible , CollapsibleItem} from 'react-materialize';

const StockDetails = (props) => {
  const { auth, stock_info, Timer, quantity} = props;
  if (!auth.uid) return <Redirect to='/signin' />
  if (stock_info) {
    //graph_data = graph_data.slice(0, Timer);
    var graph_data = []
    for (var x = 0; x < Timer; x++){
      graph_data.push(
        {
        "x" : x,
        "y" : stock_info.price[x]
        }
      )
    }
    return (
      <div className={ ""}>
        <div className="card z-depth-0 ">
          <div className="no_bottom_padding card-content ">
            <div className="row no_bottom_margin">
            <div className="col m6 ">
                <span className="card-title">{stock_info.name}</span>
                <p>{stock_info.ticker}</p>
              </div>
              <div className="col m6  ">
                <span className="card-title  right-align ">{stock_info.price[Timer].toFixed(2)}</span>
                <span className="card-title  right-align">{quantity}</span>
              </div>
            </div>
          </div>
          <Collapsible>
            <CollapsibleItem header='View Graph Detail' icon='show_chart'>

            <div className="chart_box">
              <ResponsiveLine data={[
                  {
                    id: stock_info.name,
                    data: graph_data
                  },

                ]}
              
                margin={{
                  "top": 25,
                  "right": 30,
                  "bottom": 25,
                  "left": 30
              }}
              xScale={{
                  "type": "point"
              }}
              yScale={{
                  "type": "linear",
                  "stacked": true,
                  "min": "auto",
                  "max": "auto"
              }}
              minY="auto"
              maxY="auto"
              stacked={true}
              axisTop={null}
              axisRight={null}
              axisBottom={null}
              axisLeft={{
                  "orient": "left",
                  "tickSize": 5,
                  "tickPadding": 5,
                  "tickRotation": 0,
                  "legend": "Price",
                  "legendOffset": -40,
                  "legendPosition": "middle"
              }}
              enableGridX={false}
              enableDots={false}
              dotSize={2}
              dotColor="inherit:darker(0.3)"
              dotBorderWidth={2}
              dotBorderColor="#ffffff"
              enableDotLabel={true}
              dotLabel="y"
              dotLabelYOffset={-12}
              animate={true}
              motionStiffness={90}
              motionDamping={15}

          />
            </div>
            </CollapsibleItem>

          </Collapsible>
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
