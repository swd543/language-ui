import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  FormControl,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  DialogActions,
  Button
} from "@material-ui/core";
import { IUser } from "../App";

interface IProps {
  open: boolean;
  dialogHandler: (open: boolean) => () => void;
  addUserHandler: (user: IUser) => () => void;
}

const AddUserDialog: React.FC<IProps> = ({
  open,
  dialogHandler,
  addUserHandler: adduserhandler
}) => {
  const [user, setuser] = useState<IUser>({ gender: "female" });

  const handleUser = (e: React.ChangeEvent<any>) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <Dialog open={open} onClose={dialogHandler(false)}>
      <DialogTitle>Add user</DialogTitle>
      <DialogContent>
        <DialogContentText>Enter details of the user</DialogContentText>
        <FormControl>
          <TextField label="Name" name="name" onChange={handleUser} required />
          <TextField
            label="Age"
            name="age"
            type="number"
            onChange={handleUser}
            required
          />
          <RadioGroup name="gender" value={user.gender}>
            <FormControlLabel
              label="Male"
              value="male"
              onChange={handleUser}
              control={<Radio />}
            />
            <FormControlLabel
              label="Female"
              value="female"
              onChange={handleUser}
              control={<Radio />}
            />
          </RadioGroup>
        </FormControl>
        <DialogActions>
          <Button onClick={adduserhandler(user)}>Ok</Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};

export default AddUserDialog;
