import React, { Component } from "react";
import CreateRoomPage from "./CreateRoomPage";
import RoomJoinPage from "./RoomJoinPage";
import Room from "./Room";
import { Grid, Button, ButtonGroup, Typography } from "@material-ui/core";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  renderHomePage() {
		return(
			<Grid container xs={12} spacing={1} align="center">
				<Grid item xs={12}>
					<Typography variant="h3" compact="h3">
						House Party
					</Typography>	
				</Grid>
				<Grid item xs={12}>
					<ButtonGroup variant="contained" color="primary">
						<Button color="primary" to="/join" component={Link}>
							Join A Room
						</Button>
						<Button color="secondary" to="/create" component={Link}>
							Create A Room
						</Button> 
					</ButtonGroup> 
				</Grid> 	
			</Grid>
		);
	}
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
						{this.renderHomePage()}
          </Route>
          <Route exact path="/join" component={RoomJoinPage}></Route>
          <Route exact path="/create" component={CreateRoomPage}></Route>
          <Route exact path="/room/:roomCode" component={Room}></Route>
        </Switch>
      </Router>
    );
  }
}
