import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory} from "react-router-dom";
import * as sessionActions from "../../store/session";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const history = useHistory();
  const sessionUser = useSelector(state => state.session.user);


  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout())
    history.push('/');
  };

  const handleClickToCreate = (e) => {
    e.preventDefault();
    history.push("/create")
  }

  return (
		<>
			<ul className="navButtons">
				<li>
					<button onClick={openMenu}>
						<i class="fa-solid fa-user"></i>
					</button>
				</li>
				<li>
					<button onClick={handleClickToCreate}>
						<i class="fa-solid fa-wand-sparkles"></i>
					</button>
				</li>
			</ul>
			{showMenu && (
				<ul className="profile-dropdown">
					<li>Welcome, {user.firstName}!</li>
					<br />
					<li>{user.email}</li>
					<br />
					<li>
						<button onClick={logout}>Log Out</button>
					</li>
				</ul>
			)}
		</>
	);
}

export default ProfileButton;
