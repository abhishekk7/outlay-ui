import React, { Component } from "react";
import axios from "axios";
import { Doughnut } from "react-chartjs-2";

class TrendsPage extends Component {
  state = {
    transactions: [],
    graphData: {
      labels: [],
      datasets: [{
        data: [],
        backgroundColor: []
      }]
    },
    total: 0
  };

  getRandomColor = () => {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  groupItems = () => {
    let transactions = this.state.transactions;
    let grouping = {};
    let total = 0;
    transactions.forEach((value, key) => {
      if (value.amount > 0) {
        value.category.forEach((key) => {
          if (grouping[key]) {
            grouping[key] += value.amount;
          } else {
            grouping[key] = value.amount;
          }
        })
        total += value.amount;
      }
    })
    let graphData = {
      labels: [],
      datasets: [{
        data: [],
        backgroundColor: []
      }]
    }
    for (let key in grouping) {
      graphData.labels.push(key);
      graphData.datasets[0].data.push(grouping[key]);
      graphData.datasets[0].backgroundColor.push(this.getRandomColor());
    }

    this.setState({ ...this.state, graphData, total })
  }

  componentDidMount() {
    axios({
      method: "post",
      url: "http://localhost:9000/api/v1/plaid/transactions",
      data: {
        email: "abhishek@test.com"
      }
    }).then(res => {
      const transactions = res.data.transactions;
      this.setState({ ...this.state, transactions });
      this.groupItems();
    });
  }

  render() {

    function getRandomColor() {
      var letters = '0123456789ABCDEF'.split('');
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }

    const data = {
      labels: ["red", "green", "blue"],
      datasets: [{
        data: [1, 2, 3],
        backgroundColor: [getRandomColor(), getRandomColor(), getRandomColor()]
      }]
    }

    return <div className="container">
      <div className="card">
        <div className="card-image">
          <Doughnut data={this.state.graphData} options={{ responsive: true, legend:{ position: 'right' } }} />
          <span className="card-title">Card Title</span>
        </div>
        <div className="card-action">
          Total : { this.state.total + " USD" }
        </div>
      </div>
    </div>;
  }
};

export default TrendsPage;
