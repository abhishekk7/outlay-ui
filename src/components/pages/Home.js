import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import NumberFormat from 'react-number-format';
import { FaPiggyBank, FaUniversity, FaFileInvoiceDollar, FaCreditCard, FaMoneyCheckAlt, FaHandHoldingUsd } from "react-icons/fa";


class HomePage extends Component {
  state = {
    accounts: []
  };

  componentDidMount() {
    axios({
      method: "post",
      url: "http://localhost:9000/api/v1/plaid/accounts",
      data: {
        email: "abhishek@test.com"
      }
    }).then(res => {
      const accounts = res.data.accounts;
      this.setState({ accounts });
    });
  }

  getImage = (account) => {
    switch (account.subtype) {
      case 'checking':
        return <FaUniversity className="circle" />
        break;
      case 'savings':
        return <FaPiggyBank className="circle" />
        break;
      case 'cd':
        return <FaFileInvoiceDollar className="circle" />
        break;
      case 'credit card':
        return <FaCreditCard className="circle" />
        break;
      case 'money market':
        return <FaMoneyCheckAlt className="circle" />
        break;
      default:
        return <FaHandHoldingUsd className="circle" />
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="card">
            <div className="card-content">
              <span className="card-title">My Accounts</span>
            </div>
            <div className="card-action">
              <ul className="collection">
                {this.state.accounts.map(account => (
                  <li className="collection-item avatar" key={account.account_id}>
                    {this.getImage(account)}
                    <span className="flow-text">{account.name}</span>
                    <p>{account.official_name}</p>
                    <Link to={"/transactions?account=" + account.account_id} className="secondary-content flow-text">
                      <NumberFormat value={account.balances.current} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default HomePage;
