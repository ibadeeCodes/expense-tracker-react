import { ADD_TRANSACTION, DELETE_TRANSACTION } from '../types'

export default (state, action) => {
  switch (action.type) {
    case ADD_TRANSACTION:
      if (action.payload.type === 'income') {
        return {
          ...state,
          balance: state.balance + parseInt(action.payload.value),
          totalIncome: state.totalIncome + parseInt(action.payload.value),
          transactions: [action.payload, ...state.transactions],
        }
      } else {
        return {
          ...state,
          balance: state.balance - parseInt(action.payload.value),
          totalExpense: state.totalExpense + parseInt(action.payload.value),
          transactions: [action.payload, ...state.transactions],
        }
      }
    case DELETE_TRANSACTION:
      if (action.payload.type === 'income') {
        return {
          ...state,
          transactions: state.transactions.filter(
            (transaction) => transaction.id !== action.payload.id
          ),
          totalIncome: state.totalIncome - parseInt(action.payload.value),
          balance: state.balance - parseInt(action.payload.value),
        }
      } else {
        return {
          ...state,
          transactions: state.transactions.filter(
            (transaction) => transaction.id !== action.payload.id
          ),
          totalExpense: state.totalExpense - parseInt(action.payload.value),
          balance: state.balance + parseInt(action.payload.value),
        }
      }
    default:
      return state
  }
}
