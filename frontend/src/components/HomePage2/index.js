import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { getSpots, deleteSpot } from "../../store/spots";
import './Home.css'

function HomePage2() {

  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state?.session?.user)
  const spots = useSelector((state) => state?.spots?.spots)

  console.log(spots)
  useEffect(() => {
    dispatch(getSpots());
  }, [dispatch]);

  const handleDelete = async (id) => {
    await dispatch(deleteSpot(id));
    await dispatch(getSpots())
  };


  return (
		<>
			<div className="home-container">
				<div className="title-container">
					<h1>Find Your Magical Stay</h1>
				</div>
				<div className="spots-container">
					{spots?.map((spot) => (
						<>
							<div className="spot-card">
								<div className="spot-image-container">
									<img
										className="spot-image"
										src={spot?.Images[0]?.url}
										alt="spot"
									/>
								</div>
								{user?.id !== spot?.userId ? null : (
									<>
										<div className="user-button-container">
											<button>Edit</button>
											<button
												id={spot?.id}
												onClick={(e) => handleDelete(e.target.id)}
											>
												Delete
											</button>
										</div>
									</>
								)}
								<div className="spot-location">
									{spot?.city}, {spot?.state}
								</div>
								<div className="spot-info">
									{spot?.name}
									<br />${spot?.price} /night
								</div>
							</div>
						</>
					))}
				</div>
			</div>
		</>
	);
}

export default HomePage2;
