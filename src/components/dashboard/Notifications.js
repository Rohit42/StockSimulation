import React, { Component } from 'react'

import moment from 'moment'


const allNotifications = [
  {
    id: 0,
    content: "Congress cuts defense budget by $250M",
    time: 25
  },
  {
    id: 1,
    content: "Snapchat reports data leak affecting 100M users globally.",
    time: 100
  },
  {
    id: 2,
    content: "President Trump announces tariffs on remaining $257B in imported Chinese goods.",
    time: 150
  },
  {
    id: 3,
    content: "Turkish lira declines further, affects developing economies globally",
    time: 250
  },
  {
    id: 4,
    content: "Trump administration announces new pharma bill impacting millions of Americans",
    time: 300
  },
  {
    id: 5,
    content: "Google beats EPS estimates on earnings, revenues flat.",
    time: 350
  },
  {
    id: 6,
    content: "Fed hikes interest rates by another 0.25% to cool down markets.",
    time: 475
  },
  {
    id: 7,
    content: "EPA releases more stringent environmental regulations to take effect in 2019.",
    time: 525
  }
];

class Notifications extends Component {

  state = {
    notifications : [],
    lastUpdate : 0
  }
  render(){
    const i = this.state.lastUpdate;
    if(i < allNotifications.length && allNotifications[i].time < this.props.Timer) {
      this.setState({lastUpdate : i + 1});
      if (i === allNotifications.length - 1 || this.props.Timer < allNotifications[i + 1].time) {
        window.Materialize.toast(allNotifications[i].content, 4000);
      }
      this.setState({notification: this.state.notifications.push(allNotifications[i])});
    }

    return (

      <div className="section">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">Notifications</span>
            <ul className="online-users">
              { this.state.notifications && this.state.notifications.map(item =>{
                return <li key={item.id}>
                  <span className="pink-text">{item.content} </span>
                  <span>{item.time}</span>
                </li>
              })}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Notifications
