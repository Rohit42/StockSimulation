import React, { Component } from 'react'
import Portfolio from '../stocks/Portfolio'
import Notifications from './Notifications'
import StatusPanel from './StatusPanel'

import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'



class Dashboard extends Component {



  render() {

    const { stocks, auth, notifications, stock_data, total, liquid, Timer } = this.props;
    if (!auth.uid) return <Redirect to='/signin' /> 
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <Portfolio stocks={stocks} stock_data ={stock_data} Timer = {Timer} />
          </div>
          <div className="col s12 m5 offset-m1">
            <div className="timer_box">
              <div className="chip timer">
                Timer: {Timer}
              </div>
            </div>
            <StatusPanel liquid = {liquid} total = {total} stocks={stocks} stock_data={stock_data} Timer = {Timer}></StatusPanel>

            <Notifications Timer={Timer} />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state);

  const uid = state.firebase.auth.uid;
  const users = state.firestore.data.users;
  const user = users ? users[uid] : null;
  const stocks = user ? user['stocks'] : null;
  const liquid = user ? user['liquid'] : null;
  const total = user ? user['total'] : null;
  const stock_data = state.firestore.data.stock_data;
  const Timer = stock_data ? stock_data["Game"]['Timer'] : null;

  return {
    liquid: liquid,
    total: total,
    stocks: stocks,
    auth: state.firebase.auth,
    stock_data : stock_data,
    Timer : Timer
  }
}



export default compose(

  firestoreConnect([
    { collection: 'users',
    },
    { collection: 'stock_data',
    },
    { collection: 'notifications',
      limit: 3,
      orderBy: ['time', 'desc'],
    }
  ]),connect(mapStateToProps)
)(Dashboard)