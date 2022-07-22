// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {Balance, Income, expense} = props

  return (
    <div className="currentTrack">
      <div className="balanceCard currentTrack moneyCard">
        <img
          className="activityLogo"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
        />
        <div>
          <p>Your Balance</p>
          <p className="currency" testid="balanceAmount">
            RS {Balance}
          </p>
        </div>
      </div>
      <div className="IncomeCard currentTrack moneyCard">
        <img
          className="activityLogo"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
        />
        <div>
          <p>Your Income</p>
          <p className="currency" testid="incomeAmount">
            RS {Income}
          </p>
        </div>
      </div>
      <div className="expenditureCard currentTrack moneyCard">
        <img
          className="activityLogo"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
        />
        <div>
          <p>Your Expenses</p>
          <p className="currency" testid="expensesAmount">
            RS {expense}
          </p>
        </div>
      </div>
    </div>
  )
}
export default MoneyDetails
