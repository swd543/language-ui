import {
  AppBar,
  Button,
  Drawer,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
  Toolbar,
  Typography
} from "@material-ui/core";
import { blue, teal } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";
import { Add, GTranslate, Menu } from "@material-ui/icons";
import { ThemeProvider } from "@material-ui/styles";
import React, { useState } from "react";
import "./App.css";
import AddLanguageDialog from "./components/AddLanguageDialog";
import AddUserDialog from "./components/AddUserDialog";
import UserCard from "./components/UserCard";

const theme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: blue
  }
});

export interface IUser {
  name?: string;
  age?: number;
  gender: string;
}

const App: React.FC = () => {
  const [drawerOpen, setdrawerOpen] = useState(false);

  const drawerHandler = (open: boolean) => () => {
    setdrawerOpen(open);
  };

  const [isUserDialogOpen, setIsUserDialogOpen] = useState(false);

  const userDialogHandler = (open: boolean) => () => {
    setIsUserDialogOpen(open);
  };

  const [isLanguageDialogOpen, setIsLanguageDialogOpen] = useState(false);

  const languageDialogHandler = (open: boolean) => () => {
    setIsLanguageDialogOpen(open);
  };

  function* generateUser(): IterableIterator<IUser> {
    const names: string[] = [
      "Swapneel",
      "Sakshi",
      "Arnav",
      "Aarav",
      "Chaitali",
      "Rajesh",
      "Rakesh",
      "Hannah Montana Lorem Ipsum",
      "Christian Van Koenigsegg"
    ];
    const genders: string[] = ["male", "female"];
    yield {
      name: names[Math.floor(Math.random() * names.length)],
      age: Math.floor(Math.random() * 100),
      gender: genders[Math.floor(Math.random() * genders.length)]
    };
  }

  const initUsers: IUser[] = [
    generateUser().next().value,
    generateUser().next().value,
    generateUser().next().value,
    generateUser().next().value,
    generateUser().next().value,
    generateUser().next().value,
    generateUser().next().value,
    generateUser().next().value,
    generateUser().next().value,
    generateUser().next().value,
    generateUser().next().value,
    generateUser().next().value,
    generateUser().next().value,
    generateUser().next().value,
    generateUser().next().value,
    generateUser().next().value,
    generateUser().next().value,
    generateUser().next().value
  ];
  const [users, setusers] = useState<IUser[]>(initUsers);

  const addUserHandler = (user: IUser) => () => {
    setusers([...users, user]);
  };

  const [userFilter, setuserFilter] = useState<string>("");

  const getFilteredUsers = () => {
    return users.filter(
      user =>
        user.name &&
        user.name.toLocaleLowerCase().includes(userFilter.toLocaleLowerCase())
    );
  };

  const handleFilterChange = (e: React.ChangeEvent<any>) => {
    setuserFilter(e.target.value);
  };

  const [languages, setlanguages] = useState(["English"]);

  const StylizedButton = ({ children }: { children: JSX.Element | string }) => (
    <Button
      variant="contained"
      style={{ borderRadius: 0, margin: 4, backgroundColor: "rgba(0,0,0,0.2)" }}
    >
      {children}
    </Button>
  );

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="sticky">
        <Toolbar>
          <IconButton onClick={drawerHandler(true)}>
            <Menu />
          </IconButton>
          <Typography variant="h6">Hello world</Typography>
          <div style={{ marginLeft: "auto", marginRight: "auto" }}>
            {languages.map((language, i) => (
              <StylizedButton key={i}>{language}</StylizedButton>
            ))}
          </div>
          <TextField
            style={{ marginLeft: "auto" }}
            variant="filled"
            label="Search users"
            type="search"
            onChange={handleFilterChange}
          />
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={drawerHandler(false)}>
        <ListItem button onClick={languageDialogHandler(true)}>
          <ListItemIcon>
            <GTranslate />
          </ListItemIcon>
          <ListItemText>Add Language</ListItemText>
        </ListItem>
        <ListItem button onClick={userDialogHandler(true)}>
          <ListItemIcon>
            <Add />
          </ListItemIcon>
          <ListItemText>Add user</ListItemText>
        </ListItem>
      </Drawer>
      <AddUserDialog
        open={isUserDialogOpen}
        dialogHandler={userDialogHandler}
        addUserHandler={addUserHandler}
      />
      <AddLanguageDialog
        open={isLanguageDialogOpen}
        dialogHandler={languageDialogHandler}
        addLanguagesHandler={(newLanguages: string[]) => () => {
          setlanguages(newLanguages);
          setIsLanguageDialogOpen(false);
          setdrawerOpen(false);
        }}
        existingLanguages={languages}
      />
      <div
        style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start" }}
      >
        {getFilteredUsers().map((user, i) => (
          <UserCard key={i} user={user} />
        ))}
      </div>
    </ThemeProvider>
  );
};

export default App;
