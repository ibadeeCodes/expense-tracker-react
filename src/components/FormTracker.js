import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import React, { Fragment, useState, useContext } from 'react'
import { Select, MenuItem, InputLabel } from '@material-ui/core'
import TrackerContext from '../context/tracker/trackerContext'
import Data from '../components/Data'

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}))

const FormTracker = () => {
  const trackerContext = useContext(TrackerContext)

  const { addTransaction } = trackerContext

  const classes = useStyles()

  const [ammount, setAmmount] = useState({
    title: '',
    type: 'income',
    value: '',
  })

  let { title, type, value } = ammount

  const onChange = (e) => {
    setAmmount({
      ...ammount,
      [e.target.name]: e.target.value,
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if (title === '' || value === '') {
      console.log('Enter complete details of transaction')
    } else {
      addTransaction(ammount)
      ammount.title = ''
      ammount.value = ''
    }
  }

  return (
    <Fragment>
      <Data />
      <form onSubmit={onSubmit}>
        <input
          type='text'
          placeholder='Title'
          name='title'
          value={title}
          onChange={onChange}
        />
        <div>
          <InputLabel id='demo-simple-select-filled-label'>
            Select Type
          </InputLabel>
          <Select
            labelId='demo-simple-select-filled-label'
            id='demo-simple-select-filled'
            value={type}
            onChange={onChange}
            name='type'
          >
            <MenuItem value='income'>Income</MenuItem>
            <MenuItem value='expense'>Expense</MenuItem>
          </Select>
        </div>
        <input
          type='number'
          placeholder='Enter ammount'
          name='value'
          value={value}
          onChange={onChange}
        />
        <div>
          <Button
            variant='contained'
            color='primary'
            className={classes.button}
            type='submit'
          >
            Add Transaction
          </Button>
        </div>
      </form>
    </Fragment>
  )
}

export default FormTracker
