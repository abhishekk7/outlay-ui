import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";

class TransactionsPage extends Component {
  state = {
    transactions: [],
    filteredTransactions: [],
    value: 'all'
  };

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
      this.filterTransactions();
    });
  }

  // componentWillUpdate(props, state) {
  //   if (this.state.value !== state.value) {
  //     this.filterTransactions(state.value);
  //   }
  // }

  handleChange = (event) => {
    this.setState({ ...this.state, value: event.target.value });
    // this.filterTransactions();
  }

  filterTransactions = (value) => {
    console.log('filterTransactions');
    const filteredTransactions = this.state.transactions;
    const account = value || this.state.value;
    if (account && account != 'all') {
      // filteredTransactions = [];
      console.log('account updated')
    }
    this.setState({ ...this.state, filteredTransactions });
  }

  render() {
    return (
      <div className="container">
        <div className="card">
          <div className="card-content">
            <span className="card-title">
              My Transactions
              <div className="right">
                <select value={this.state.value} className="browser-default" onChange={this.handleChange}>
                  <option value="all">All</option>
                  <option value="second">second</option>
                </select>
              </div>
            </span>
          </div>
          <div className="card-action">
            <table className="striped responsive-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Amount</th>
                  <th className="right">Category</th>
                </tr>
              </thead>
              <tbody>
                {this.state.filteredTransactions.map(transaction => (
                  <tr
                    key={transaction.transaction_id}
                    className={transaction.amount < 0 ? "green lighten-5" : ""}
                  >
                    <td>{transaction.date}</td>
                    <td>{transaction.name}</td>
                    <td>{transaction.transaction_type}</td>
                    <td>{transaction.amount + transaction.iso_currency_code}</td>
                    <td>{transaction.category.map(value => (
                      <div key={value} style={{ textAlign: 'right' }}>
                        <Link to={'/trends?type=' + value}>
                          <span className="blue-text">{value}</span>
                        </Link>
                      </div>
                    ))}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
export default TransactionsPage;
