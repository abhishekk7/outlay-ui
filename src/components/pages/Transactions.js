import React, { Component } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";
import { from } from "rxjs";

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
        <Table striped bordered hover className="my-4">
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
                    <li key={value}>{value}</li>
                  ))}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
export default TransactionsPage;
