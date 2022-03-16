import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { BrowserRouter, NavLink, Route, useParams } from "react-router-dom";
import { NavLink, useHistory, useParams } from "react-router-dom";
// import * as sessionActions from "../../store/session";
import { getSpots, addReview } from "../../store/spots";
import "./HomePage.css";

function HomePage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.session?.user)
  const spots = useSelector((state) => Object.values(state.spots));


  useEffect(() => {
    dispatch(getSpots(spots));
  }, [dispatch]);

  return (
    <>
      <div className="home-container">
        <ul className="spots">
          {spots.map((spot) => {
            return (
              <div className="spotDiv">
                <li className="spotCard">
                  <NavLink to={`/spots/${spot.id}`}>
                    <h3>{spot.name}</h3>
                  </NavLink>

                  <ul className="spotImagesDiv">

                    {spot.Images.map((image) => {
                      if (image) {
                        return (
                          <li className="spotImage" key={image.id}>
                            <img src={image.url} className="spotImage" />
                          </li>
                        );
                      }
                    })}
                  </ul>
                  <ul>
                    <li className="spotList" id="spotPrice">
                      ${spot.price} per night
                    </li>
                    <br/>
                    <li classname="spotList" id="spotCity">
                      {spot.city}, {spot.state}
                    </li>
                  </ul>
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default HomePage;
