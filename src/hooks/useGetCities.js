import axios from "axios"
import { useLocation } from "../Contexts/LocationContext"
import { useState, useEffect } from "react"

const useGetCities = () => {
    const key = process.env.REACT_APP_OPENWHEATHER_API_KEY
    const [cities, setCities] = useState()

    const { queryLocation } = useLocation()
    const apiUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${queryLocation}&limit=5&appid=${key}`

    const getCity = () => {
        return axios.get(apiUrl)
            .then(res => setCities(res.data))
            .catch(err => setCities(err.data))
    }

    useEffect(()=>{
        getCity()
    },[queryLocation])

    return cities
}

export default useGetCities