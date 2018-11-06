
export const tradeStock = (stock, stock_data, history) => {
  return (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const traderId = getState().firebase.auth.uid;
    var stock_map = getState().firebase.profile.stocks;
    var liquid = getState().firebase.profile.liquid;
    const total = getState().firebase.profile.total;
    const timer = stock_data["Game"]["Timer"];
    console.log(stock_data)
    console.log(stock_data[stock.name].price);

    if(stock.transaction === "Buy") {
      const cost = parseFloat("" + stock_data[stock.name].price[timer]) * parseFloat(stock.quantity + "");
      liquid = liquid - cost;
      if (stock.name in stock_map) {
        stock_map[stock.name] = parseFloat(stock_map[stock.name]) + parseFloat(stock.quantity + "");
      }
      else {
        stock_map[stock.name] =  parseFloat(stock.quantity + "");
      }
    }
    else {
      const profit = parseFloat("" + stock_data[stock.name].price[timer]) * parseFloat(stock.quantity + "");
      liquid = liquid + profit;
      stock_map[stock.name] = parseFloat(stock_map[stock.name]) - parseFloat(stock.quantity + "");
    }
    firestore.collection('users').doc(traderId).update({
    stocks: stock_map,
    liquid: liquid,
    total: total
    })
    
    .then(() => {
      console.log("Account Created");
      history.push('/');
      dispatch({ type: 'TRADE_SUCCESS' });
    }).catch(err => {
      dispatch({ type: 'TRADE_ERROR' }, err);
      });
     
  }
};