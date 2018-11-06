import React, { Component } from 'react'
import Notifications from '../dashboard/Notifications'
import StatusPanel from '../dashboard/StatusPanel'
import { tradeStock } from '../../store/actions/projectActions'
import { connect } from 'react-redux'
import { firestoreConnect, isLoaded } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import StockDetails from './StockDetails';
import { Input, Row } from 'react-materialize';

class Trade extends Component {


  constructor (props){
    super(props);
  
    this.state = {
      id: '',
      name: 'Apple',
      quantity: 0,
      transaction: "Sell",
      trigger: 1
    }
  
    this.onRadioChange = this.onRadioChange.bind(this);
  
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
    this.setState({id: this.state.name});

  }
  handleSubmit = (e) => {
    e.preventDefault();
    if(this.isTransactionValid()){
      console.log("true");
      this.props.tradeStock(this.state, this.props.stock_data, this.props.history );
      return
    }
    console.log("false")
    
  }

  isTransactionValid() {
    //1 is buy -1 is sell
    console.log(this.state.transaction)
    if(this.state.transaction === '') {
      window.Materialize.toast("Buy or Sell!", 2000)
      return false;
    }
    if((this.state.quantity + "") === '0' || this.state.quantity === "") {
      window.Materialize.toast("Gotta trade something!", 2000)
      return false;
    }
    else {
      if(this.state.transaction === 'Sell') {
        const currentHoldings = this.props.stocks[this.state.name] ?this.props.stocks[this.state.name] : 0
        if (this.state.quantity > currentHoldings) {
          window.Materialize.toast("Can't sell stock you don't have!", 2000)
          return false;
        }

      }
      if(this.state.transaction === 'Buy') {
        //Enough cash


        const cost = parseFloat("" + this.props.stock_data[this.state.name].price[this.props.Timer]) * parseFloat(this.state.quantity + "");
        if (this.props.liquid < cost) {
          window.Materialize.toast("Don't have the money for that! Try selling some stock", 2000)
          return false;
        }
      }
    }
    return true
  }

  onRadioChange(value) {
    
    console.log(this.state.transaction);
    this.setState({
      transaction: (this.state.transaction === "Buy") ? "Sell" : "Buy"
    });
    console.log(this.state.transaction);

  }

  render() {
    const { stocks, auth, notifications, stock_data, total, liquid, Timer } = this.props;
    if (!isLoaded(Timer)) {
      return <div>Loading...</div>
    }
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
                <div className="row">
                    <div className="col m6">
                        <h5 className="grey-text text-darken-3">Trade</h5>
                    </div>
                    <div className="col m6 ">
                        <div className="float_right">                       
                        <div class="switch" onChange={this.onRadioChange}>
                            <label>
                              Sell
                              <input type="checkbox"/>
                              <span class="lever"></span>
                              Buy
                            </label>
                          </div>
                        </div>  
                    </div>
                </div>
                <div className="row">


                  <Input s={12} id="name" type='select' label="Stock" defaultValue='Apple' onChange={this.handleChange}>
                      <option value="Apple">Apple</option>
                      <option value="Google">Google</option>
                      <option value="Amazon">Amazon</option>
                      <option value="JP Morgan">JP Morgan</option>
                      <option value="Goldman Sachs">Goldman Sachs</option>
                      <option value="P&G">P&G</option>
                      <option value="Pepsi Co">Pepsi Co</option>
                      <option value="Coca Cola">Coca Cola</option>
                      <option value="Exxon Mobil">Exxon Mobil</option>
                      <option value="Johnson & Johnson">Johnson & Johnson</option>
                      <option value="United Health">United Health</option>
                      <option value="Boeing">Boeing</option>
                      <option value="Ford">Ford</option>
                      <option value="AT&T">AT&T</option>
                      <option value="AMD">AMD</option>
                      <option value="Visa">Visa</option>
                      <option value="US Steel">US Steel</option>
                      <option value="S&P Tracker ETF">S&P Tracker ETF</option>
                      <option value="Russell 2000">Russell 2000</option>
                  </Input>

                </div>
                <div className="input-field">
                  <input type="number" id="quantity" min="0" onChange={this.handleChange}></input>
                  <label htmlFor="quantity">Quantity</label>
                </div>
                <div className="input-field">
                  <button className="btn pink lighten-1">TRADE</button>
                </div>
              </form>
          </div>

          <div className="col s12 m5 offset-m1">
            <StatusPanel Timer={Timer} liquid = {liquid} total = {total} stocks={stocks} stock_data={stock_data}></StatusPanel>
            <Notifications Timer={Timer} />
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