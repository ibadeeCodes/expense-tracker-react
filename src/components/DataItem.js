import React, { Fragment, useContext } from 'react'
import TrackerContext from '../context/tracker/trackerContext'
import '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import IconButton from '@material-ui/core/IconButton'
import Grid from '@material-ui/core/Grid'
import DeleteIcon from '@material-ui/icons/Delete'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}))

const DataItem = ({ transaction }) => {
  const { id, title, type, value } = transaction

  const trackerContext = useContext(TrackerContext)

  const { deleteTransaction } = trackerContext

  const onDelete = () => {
    deleteTransaction({ id, type, value })
  }

  const classes = useStyles()
  return (
    <Fragment>
      <Grid item xs={12} md={6}>
        <div className={classes.demo}>
          <List>
            <ListItem>
              <ListItemAvatar>
                <div>${value}</div>
              </ListItemAvatar>
              <ListItemText primary={title} secondary={type} />
              <ListItemSecondaryAction>
                <IconButton edge='end' aria-label='delete' onClick={onDelete}>
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </List>
        </div>
      </Grid>
    </Fragment>
  )
}

export default DataItem
