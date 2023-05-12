const countryTime = (timezone,dt,options)=>{
    const offset = new Date().getTimezoneOffset() + timezone / 60;
    const date = new Date((dt + offset * 60) * 1000);

    if(options) return date.toLocaleDateString("en-US", options);
    
    return date
}

export default countryTime