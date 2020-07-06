import React, { useReducer } from 'react'
import { v4 as uuid } from 'uuid'
import trackerReducer from './trackerReducer'
import TrackerContext from './trackerContext'

import { ADD_TRANSACTION, DELETE_TRANSACTION } from '../types'

const TrackerState = (props) => {
  const initialState = {
    balance: 0,
    totalIncome: 0,
    totalExpense: 0,
    transactions: [],
  }

  const [state, dispatch] = useReducer(trackerReducer, initialState)

  // ADD TRANSACTION
  const addTransaction = ({ title, type, value }) => {
    const id = uuid()
    dispatch({ type: ADD_TRANSACTION, payload: { id, title, type, value } })
  }

  // delete TRANSACTION
  const deleteTransaction = ({ id, type, value }) => {
    dispatch({ type: DELETE_TRANSACTION, payload: { id, type, value } })
  }

  return (
    <TrackerContext.Provider
      value={{
        balance: state.balance,
        totalIncome: state.totalIncome,
        totalExpense: state.totalExpense,
        transactions: state.transactions,
        addTransaction,
        deleteTransaction,
      }}
    >
      {props.children}
    </TrackerContext.Provider>
  )
}

export default TrackerState
