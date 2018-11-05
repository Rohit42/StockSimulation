import React, { Component } from 'react'
import Notifications from '../dashboard/Notifications'
import StatusPanel from '../dashboard/StatusPanel'
import { tradeStock } from '../../store/actions/projectActions'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import StockDetails from './StockDetails';

class Trade extends Component {
  state = {
    id: '',
    name: '',
    quantity: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
    this.setState({id: this.state.name});

  }
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    this.props.tradeStock(this.state, this.props.stock_data, this.props.history );
    
  }
  render() {
    const { stocks, auth, notifications, stock_data, total, liquid, Timer } = this.props;
    if (!auth.uid) return <Redirect to='/signin' /> 
    var detail_name = "Apple"

    if (stock_data && this.state.name)  {
      var i;
      for(i = 0; i <  Object.keys(stock_data).length; i++) {
        if (this.state.name === Object.keys(stock_data)[i]) {
          detail_name = this.state.name;
        }
      }
    }
    return (
      <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <form className="white margin_top_short" onSubmit={this.handleSubmit}>
                <h5 className="grey-text text-darken-3">Trade</h5>
                <div className="input-field">
                  <input type="text" id='name' list="stocks_to_trade"onChange={this.handleChange} />
                  <datalist id="stocks_to_trade">
                      <option value="Apple"/>
                      <option value="Google"/>
                  </datalist>
                  <label htmlFor="name">Stock</label>
                  
                </div>
                <div className="input-field">
                  <input type="number" id="quantity"  onChange={this.handleChange}></input>
                  <label htmlFor="quantity">Quantity</label>
                </div>
                <div className="input-field">
                  <button className="btn pink lighten-1">TRADE</button>
                </div>
              </form>
          </div>

          <div className="col s12 m5 offset-m1">
            <StatusPanel Timer={Timer} liquid = {liquid} total = {total} stocks={stocks} stock_data={stock_data}></StatusPanel>
            <Notifications notifications={notifications} />
          </div>
          <div className="col s12 m12 ">
      
              <StockDetails name = {detail_name}></StockDetails>
          </div>
        </div>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const uid = state.firebase.auth.uid;
  const users = state.firestore.data.users;
  const user = users ? users[uid] : null
  const stocks = user ? user['stocks'] : null
  const liquid = user ? user['liquid'] : null
  const total = user ? user['total'] : null
  const stock_data = state.firestore.data.stock_data;

  const Timer = stock_data ? stock_data["Game"]['Timer'] : null;


  return {
    liquid: liquid,
    total: total,
    stocks: stocks,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications,
    stock_data : stock_data,
    Timer: Timer

  }
}

const mapDispatchToProps = dispatch => {
  return {
    tradeStock: (stock, stock_data, history) => dispatch(tradeStock(stock, stock_data, history))
  }
}




export default compose(
  
  firestoreConnect([
    { collection: 'users',
    },
    { collection: 'stock_data'
    },
    { collection: 'notifications',
      limit: 3,
      orderBy: ['time', 'desc']
    }
  ]),connect(mapStateToProps, mapDispatchToProps)
)(Trade)