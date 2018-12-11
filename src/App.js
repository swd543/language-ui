import { AppBar, Drawer, IconButton, List, ListItem, ListItemText, Toolbar, Typography } from '@material-ui/core';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import MenuRounded from '@material-ui/icons/MenuRounded';
import React, { Component } from 'react';
import './App.css';
import ThemePage from './components/ThemePage';
import darkTheme from './styles/darkTheme';

const dummyElements=["Clap", "Poppy", "Macaroni", "Asparagus", "Lounge", "Buga", "Maceron", "Langrange", "Newton", "Einstein"];

class App extends Component {
  state={
    drawerOpen:false
  }

  handleClick=()=>{
    this.setState(s=>({...s, drawerOpen:!s.drawerOpen}))
    console.log(this.state)
  }

  handleClose=()=>{
    this.setState(s=>({...s, drawerOpen:false}))
    console.log(this.state)
  }

  render() {
    return (
      <MuiThemeProvider theme={darkTheme}>
        <AppBar position='sticky'>
          <Toolbar >
            <IconButton onClick={this.handleClick}>
              <MenuRounded/>
            </IconButton>
            <Typography variant='h6'>
              My app
            </Typography>
          </Toolbar>
        </AppBar>
        {
          dummyElements.map(v=><ThemePage text={v}/>)
        }
        <Drawer open={this.state.drawerOpen} onClose={this.handleClose}>
          <List>
            {
              dummyElements.map(v=>
              <ListItem button>
                <ListItemText>
                  {v}
                </ListItemText>
              </ListItem>  
              )
            }
          </List>
        </Drawer>
      </MuiThemeProvider>
    );
  }
}

export default App;
