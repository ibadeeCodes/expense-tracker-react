import React, { Fragment, useContext } from 'react'
import TrackerContext from '../context/tracker/trackerContext'
import '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import FolderIcon from '@material-ui/icons/Folder'
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
  const [dense, setDense] = React.useState(false)
  const [secondary, setSecondary] = React.useState(false)
  return (
    <Fragment>
      <Grid item xs={12} md={6}>
        <div className={classes.demo}>
          <List dense={dense}>
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
