import axios from "axios"
import { useEffect, useState } from "react";
import { useLocation } from "../Contexts/LocationContext";

const useGetWheather = () => {
    const key = process.env.REACT_APP_OPENWHEATHER_API_KEY
    const [wheather, setWeather] = useState()
    const { location } = useLocation()

    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${location.latitude}&lon=${location.longitude}&appid=${key}&cnt=6&units=metric`;

    const getWheather = () => {
        return axios.get(apiUrl)
            .then((response) => setWeather(response.data))
            .catch((err) => setWeather(err.response.data))
    }
    useEffect(() => {
        getWheather()
    }, [location])

    return wheather
}

export default useGetWheather