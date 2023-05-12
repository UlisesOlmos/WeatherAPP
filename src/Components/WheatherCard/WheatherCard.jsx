import useGetCurrentWheather from "../../hooks/useGetCurrentWeather";
import countryTime from "../../utilities/countryTime";
import "./WheatherCard.css";

const WheaterCard = () => {
	const data = useGetCurrentWheather();

	let currentDate;
	if (data) {
		currentDate = countryTime(data.timezone, data.dt, {
			hour: "2-digit",
			minute: "2-digit",
			day: "2-digit",
			month: "short",
		});
	}

	return (
		<div className="wheater-card">
			{!data || data.cod === "404" ? null : (
				<>
					<p className="weather-card__time">{currentDate}</p>
					<p className="weather-card__country">
						{data.name}, {data.sys.country}
					</p>
					<img
						src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}
						className="wheater-card__img"
						alt="weather icon"
					></img>
					<p className="weather-card__temp">{Math.round(data.main.temp)}</p>
					<p className="weather-card__descrip">{data.weather[0].description}</p>
				</>
			)}
		</div>
	);
};

export default WheaterCard;
