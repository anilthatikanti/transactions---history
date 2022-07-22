// Write your code here
import './index.css'

const TransactionItem = props => {
  const {historyDetails, clickDelete} = props
  const {id, amount, amountType, title} = historyDetails

  const onDelete = () => {
    clickDelete(id)
  }

  return (
    <li className="TitleList">
      <p className="listParagraph">{title}</p>
      <p className="listParagraph">{amount}</p>
      <p className="listParagraph">{amountType}</p>
      <button
        type="button"
        testid="delete"
        className="deleteBtn listParagraph6"
        onClick={onDelete}
      >
        <img
          className="deleteLogo"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
        />
      </button>
    </li>
  )
}
export default TransactionItem
