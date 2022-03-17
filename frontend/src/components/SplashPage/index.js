import {NavLink} from "react-router-dom";
import "./SplashPage.css"


function SplashPage() {
	const cities = [
		{
			name: "Vancouver",
			image:
				"https://a.cdn-hotels.com/gdcs/production114/d115/5a3ff7e3-3997-4ccb-8415-00f3302f2d3f.jpg",
		},
		{
			name: "Seattle",
			image:
				"https://image.cnbcfm.com/api/v1/image/104540684-GettyImages-530874379.jpg?v=1532563817",
		},
		{
			name: "Portland",
			image:
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvkxdkHwOAnJDssTLdqo-xnCFdUmQPTLhYVbt1ejd0TfSXJy9pxI5MrItqLc_PtQQjDVg&usqp=CAU",
		},
		{
			name: "Bellevue",
			image:
				"https://upload.wikimedia.org/wikipedia/commons/4/4f/Bellevue_skyline_from_Mount_Baker_Ridge%2C_March_2019.jpg",
		},
	];
  return (
		<>
			<div className="background-color">
				<div className="splashContent">
					<div className="hero-image">
						<div className="hero-text-container">
							<a href="/spots" className="hero-text">
								<p className="hero-text">Find your home away from Hogwarts!</p>
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className="splash-cities-container">
				<div className="splash-cities">
					{cities.map(city => (
						<div className="city-card" key={city.name}>
						<NavLink to={`/spots/${city.name}`}>
							<div className="splash-city">
								<h2 className="city-card-cname">{city.name}</h2>
								<img className="splash-city-image" src={city.image} alt={city.name} />
								</div>
						</NavLink>
						</div>
					))}
				</div>
			</div>
		</>
	);
}

export default SplashPage;
