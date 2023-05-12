import "./SearchBar.css";
import { useLocation } from "../../Contexts/LocationContext";
import { IoLocationSharp } from "react-icons/io5";
import useGetCities from "../../hooks/useGetCities";
import { SearchCity } from "..";

const SearchBar = () => {
	const { setQueryLocation, setLocation } = useLocation();

	const cities = useGetCities();

	const filterCities = (ev) => {
		const inputValue = ev.target.value;
		if (inputValue) setQueryLocation(inputValue);
	};

	const myLocation = () => {
		navigator.geolocation.getCurrentPosition((pos) => {
			setLocation(pos.coords);
		});
	};

	return (
		<div className="search">
			<div className="search__my-search">
				<input
					className="search__input"
					placeholder="Wather in..."
					onInput={(ev) => filterCities(ev)}
				></input>

				{!cities ? null : (
					<ul className="search__cities">
						{cities.map((el, i) => (
							<SearchCity data={el} key={i} />
						))}
					</ul>
				)}
			</div>
			<button className="search__my-location" onClick={() => myLocation()}>
				<IoLocationSharp />
			</button>
		</div>
	);
};

export default SearchBar;
