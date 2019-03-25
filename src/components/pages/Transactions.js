import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";

class TransactionsPage extends Component {
  state = {
    transactions: []
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
      this.setState({ transactions });
    });
  }

  render() {
    return (
      <div className="container">
        <table className="striped responsive-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Name</th>
              <th>Type</th>
              <th>Amount</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {this.state.transactions.map(transaction => (
              <tr
                key={transaction.transaction_id}
                className={transaction.amount < 0 ? "bg-info" : ""}
              >
                <td>{transaction.date}</td>
                <td>{transaction.name}</td>
                <td>{transaction.transaction_type}</td>
                <td>{transaction.amount + transaction.iso_currency_code}</td>
                <td>{transaction.category.map(value => (
                  <div key={value}>
                    <Link to={'/trends?type=' + value}>
                      <span className="card-title blue-text">{value}</span>
                    </Link>
                  </div>
                ))}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default TransactionsPage;
