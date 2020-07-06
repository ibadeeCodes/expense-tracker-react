import React, { Fragment, useContext } from 'react'
import TrackerContext from '../context/tracker/trackerContext'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import DataItem from './DataItem'

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 500,
  },
})

const Data = () => {
  const trackerContext = new useContext(TrackerContext)

  const classes = useStyles()

  const { balance, totalIncome, totalExpense, transactions } = trackerContext
  return (
    <Fragment>
      <div className={classes.root}>
        <Typography variant='h3' component='h2' gutterBottom>
          Expense Tracker
        </Typography>
      </div>
      <h1>
        Balance: <br></br> ${balance}
      </h1>
      <div>
        <h2>Income: ${totalIncome}</h2>
        <h2>Expense: ${totalExpense}</h2>
      </div>
      <br></br>
      <h1>Transaction History :</h1>
      {transactions && transactions.length > 0 ? (
        transactions.map((transaction) => (
          <DataItem transaction={transaction} />
        ))
      ) : (
        <p>No transactions</p>
      )}
    </Fragment>
  )
}

export default Data
