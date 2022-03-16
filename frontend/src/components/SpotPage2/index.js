import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { deleteSpot, getOneSpot, editReview, deleteReview } from "../../store/spots";
import AddReviewModal from "../AddReviewModal";
import './SpotPage.css'


function SpotPage2() {
  const {spotId} = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state?.session?.user);
  const spot = useSelector((state) => state?.spots?.spot);

  console.log(spot)

  useEffect(async() => {
    await dispatch(getOneSpot(spotId))
  }, [dispatch, spotId]);

  return (
    <>
    <div className="main-spot-container">
      <div className="spot-page-container2">
        <div className="spot-page-left">
          <div className="spot-images">
          {spot?.Images?.map((image) => {
            return (
              <img className="spot-image-single" src={image.url} alt="spot-image" key={image.id}/>
            )
          }
          )}
        </div>
        </div>
        <div className="spot-page-right">
          <div className="spot-name">
            <h1>{spot?.name}</h1>
          </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default SpotPage2;
