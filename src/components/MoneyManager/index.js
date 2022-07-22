import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import MoneyDetails from '../MoneyDetails'

import TransactionItem from '../TransactionItem'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    historyList: [],
    amount: '',
    amountType: transactionTypeOptions[0].optionId,
    title: '',
  }

  addHistory = event => {
    event.preventDefault()
    const {amount, amountType, title} = this.state
    if (amount.length !== 0 && title.length !== 0) {
      const newHistory = {
        id: uuidv4(),
        amount: parseInt(amount),
        amountType,
        title,
      }
      this.setState(prevState => ({
        historyList: [...prevState.historyList, newHistory],
        amount: '',
        title: '',
      }))
    }
  }

  updateTitle = e => {
    this.setState({title: e.target.value})
  }

  updateAmount = e => {
    this.setState({amount: e.target.value})
  }

  updateAmountType = e => {
    this.setState({amountType: e.target.value})
  }

  clickDelete = id => {
    const {historyList} = this.state
    const filterList = historyList.filter(eachItem => eachItem.id !== id)
    this.setState({historyList: filterList})
  }

  getIncome = () => {
    const {historyList} = this.state
    let Income = 0
    historyList.forEach(each => {
      if (each.amountType === transactionTypeOptions[0].optionId) {
        Income += each.amount
      }
    })
    return Income
  }

  getExpense = () => {
    const {historyList} = this.state
    let expense = 0
    historyList.forEach(each => {
      if (each.amountType === transactionTypeOptions[1].optionId) {
        expense += each.amount
      }
    })
    return expense
  }

  getBalance = () => {
    const {historyList} = this.state
    let Income = 0
    let expense = 0
    let Balance = 0
    historyList.forEach(each => {
      if (each.amountType === transactionTypeOptions[0].optionId) {
        Income += each.amount
      } else {
        expense += each.amount
      }
    })
    Balance = Income - expense
    return Balance
  }

  render() {
    const {historyList, amount, title} = this.state
    const Income = this.getIncome()
    const expense = this.getExpense()
    const Balance = this.getBalance()

    return (
      <div className="container">
        <div className="card">
          <div className="profileCard">
            <h1 className="profileHeading">Hi,Richard</h1>
            <p className="profilePara">
              Welcome back to your <span>Money Manager</span>
            </p>
          </div>
        </div>

        <MoneyDetails Income={Income} expense={expense} Balance={Balance} />

        <div className="transactionContainer">
          <form className="transactionInput" onSubmit={this.addHistory}>
            <h1 className="heading">Add Transaction</h1>
            <label htmlFor="TitleLabel">TITLE</label>
            <br />
            <input
              type="text"
              id="TitleLabel"
              value={title}
              onChange={this.updateTitle}
              placeholder="TITLE"
            />
            <br />
            <label htmlFor="AmountInput">AMOUNT</label>
            <br />
            <input
              type="text"
              id="AmountInput"
              value={amount}
              placeholder="AMOUNT"
              onChange={this.updateAmount}
            />
            <br />
            <label htmlFor="amountType">TYPE</label>
            <br />
            <select id="amountType" onClick={this.updateAmountType}>
              {transactionTypeOptions.map(eachItem => (
                <option value={eachItem.optionId} key={eachItem.optionId}>
                  {eachItem.displayText}
                </option>
              ))}
            </select>
            <br />
            <button className="btn" type="submit">
              Add
            </button>
          </form>

          <div className="transactionHistory">
            <h1 className="heading">History</h1>
            <ul>
              <li className="TitleList">
                <p className="listPara">Title</p>
                <p className="listPara">Amount</p>
                <p className="listPara">Type</p>
              </li>
              {historyList.map(eachHistory => (
                <TransactionItem
                  historyDetails={eachHistory}
                  key={eachHistory.id}
                  clickDelete={this.clickDelete}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
