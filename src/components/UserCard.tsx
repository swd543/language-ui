import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Collapse,
  IconButton,
  Typography
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import React from "react";
import { IUser } from "../App";

interface IProps {
  user: IUser;
}

const UserCard: React.FC<IProps> = ({ user }) => {
  const [expand, setexpand] = React.useState(false);
  return (
    <Card style={{ margin: 5, flexWrap: "wrap" }} draggable>
      <CardHeader title={user.name} />
      <CardActions>
        <IconButton onClick={() => setexpand(!expand)}>
          <ExpandMore />
        </IconButton>
      </CardActions>
      <Collapse unmountOnExit in={expand}>
        <CardContent>
          <Typography>Lorem ipsum</Typography>
          <Typography>{user.age} years old</Typography>
          <Typography>{user.gender}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default UserCard;
