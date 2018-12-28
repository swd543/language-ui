import React, { Component } from 'react'
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core'
import { connect } from 'react-redux'
import { MenuRounded } from '@material-ui/icons'
import { addTodo } from '../actions/actions'

class TopBar extends Component {
  state = {
    drawerOpen: false,
  }

  handleClick = () => {
    this.setState(s => ({ ...s, drawerOpen: !s.drawerOpen }))
    console.log(this.state)
  }

  handleClose = () => {
    this.setState(s => ({ ...s, drawerOpen: false }))
    console.log(this.state)
  }

  render() {
    console.log(this.props.state)
    return (
      <>
        <AppBar position="sticky">
          <Toolbar>
            <IconButton onClick={this.handleClick}>
              <MenuRounded />
            </IconButton>
            <Typography variant="h6">My app</Typography>
          </Toolbar>
        </AppBar>
        <Drawer open={this.state.drawerOpen} onClose={this.handleClose}>
          <List>
            {['Puup'].map((v, i) => (
              <ListItem button key={i}>
                <ListItemText>{v}</ListItemText>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </>
    )
  }
}

const mapStateToProps = state => ({
  state,
})

export default connect(
  mapStateToProps,
  dispatch => ({
    actions: addTodo(),
  })
)(TopBar)
