import axios from "axios"
import { useEffect, useState } from "react";
import { useLocation } from "../Contexts/LocationContext";

const useGetCurrentWheather = () => {
    const key = process.env.REACT_APP_OPENWHEATHER_API_KEY
    const [currWheather, setCurrWeather] = useState()
    const { location } = useLocation()

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&units=metric&appid=${key}`;

    const getCurrentWheather = () => {
        return axios.get(apiUrl)
            .then((response) => setCurrWeather(response.data))
            .catch((err) => setCurrWeather(err.response.data))
    }
    useEffect(() => {
        getCurrentWheather()
    }, [location])

    return currWheather
}

export default useGetCurrentWheather