import useGetCurrentWheather from "../../hooks/useGetCurrentWeather";
import useGetWheather from "../../hooks/useGetWheather";
import countryTime from "../../utilities/countryTime";
import "./WheatherList.css";


const WheatherList = () => {
	const wheather = useGetWheather();
	const data = useGetCurrentWheather();

	return (
		<>
			{!wheather || !data? null : (
				<ul className="weather__list">
					{wheather.list.map((el, i) => (
						<WeatherItem data={el} dataCountry={data} key={i} />
					))}
				</ul>
			)}
		</>
	);
};

const WeatherItem = ({ data, dataCountry }) => {
    const timezone = dataCountry.timezone
    const dataDate = countryTime(timezone,data.dt,false)
    const countryDate= countryTime(timezone,dataCountry.dt,false)

    const weatherDate= countryTime(timezone,data.dt,{
        hour: "2-digit",
        minute: "2-digit",
        day: "2-digit",
        month: "2-digit",
    });

	return (
		<>
			{!countryDate ? null : (
				<div className="wheather-item">
					<div className="wheather-item__time">
						<p className="time__date">
							{dataDate.getDate() === countryDate.getDate() ? "Today" : weatherDate.split(",")[0]}
						</p>
						<p className="time__hour">{weatherDate.split(",")[1]}</p>
					</div>
					<div className="wheather-item__weather">
						<img
							src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
							className="weather__img"
							alt="weather icon"
						></img>
						<div className="weather__info">
							<p className="info__temp">{Math.round(data.main.temp)}</p>
							<p className="info__desc">{data.weather[0].description}</p>
						</div>
					</div>
				</div>
			)}
		</>
	);
};
export default WheatherList;
