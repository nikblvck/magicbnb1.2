import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import SplashPage from "./components/SplashPage";
import Navigation from "./components/Navigation";
import Homepage from "./components/HomePage2";
import SpotPage2 from "./components/SpotPage2";
import EditSpot from "./components/EditSpotForm";
import CityPage from "./components/CityPage";
import CreateSpot from "./components/CreateSpotForm";
// import SpotPage from "./components/SpotsPage";


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
		<>
			<Navigation isLoaded={isLoaded} />
			<Switch>
				<Route exact path="/">
					<SplashPage />
				</Route>
				<Route exact path="/spots">
					<Homepage />
				</Route>
				<Route exact path="/login">
					<LoginFormPage />
				</Route>
				<Route exact path="/signup">
					<SignupFormPage />
				</Route>
				<Route exact path="/spots/:city">
					<CityPage />
				</Route>
				<Route exact path="/spots/:spotId">
					<SpotPage2 />
				</Route>
				<Route path="/spots/:spotId/edit">
					<EditSpot />
				</Route>

				<Route path="/create">
					<CreateSpot />
				</Route>
			</Switch>
		</>
	);
}

export default App;
