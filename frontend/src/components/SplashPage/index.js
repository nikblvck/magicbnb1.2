import {NavLink} from "react-redux";
import "./SplashPage.css"


function SplashPage() {
  return (
		<>
			<div className="splashContent">
				<div className="hero-image">
					<div classname="hero-text">
						<h1>Magicbnb</h1>
						<p>Find your home away from Hogwarts!</p>
					</div>
				</div>
				<div className="splashContainer">
					<img
						src="
              "
						className="splashImage"
					></img>
				</div>
				<p>
					Welcome to Magicbnb, where you can find your home <i>away</i> from
					Hogwarts (Ilvermony or Durmstrang)! We have a plethora of hosts in the
					Pacific Northwest awaiting you!{" "}
				</p>
				<br />
				<p>
					<i>All</i> witches and wizards are welcome!
				</p>
			</div>
		</>
	);
}

export default SplashPage;
