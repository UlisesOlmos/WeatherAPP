import { useLocation } from '../../Contexts/LocationContext'
import './SearchCity.css'

const SearchCity = ({data})=>{

    const {setLocation,setQueryLocation} = useLocation()

    const selectCity= ()=>{
        setLocation({latitude: data.lat,longitude: data.lon})
        setQueryLocation("")
    }

    return(
        <li className='city-op' onClick={()=> selectCity()}>{data.name}, {data.country} </li>
    )
}

export default SearchCity