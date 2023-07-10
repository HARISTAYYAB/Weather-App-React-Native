import axios from 'axios';
import { apikey } from "../img";
const forcastEndpoint=params=>`https://api.weatherapi.com/v1/forecast.json?key=${apikey}&q=${params.cityName}&days=${params.days}&aqi=no&alerts=no`
const locationdpoint=params=>`https://api.weatherapi.com/v1/search.json?key=${apikey}&q=${params.cityName}`;

const apicall =async(endpoint)=>{
    const options={
        method:'GET',
        url:endpoint
    }
    try{
        const response=await axios.request(options);
        return response.data
    }catch(err){
        console.log("error: ",err)
        return null;

    }
}
export const fetchWeatherForcast= params=>{
    return apicall(forcastEndpoint(params))
}
export const fetchlocation= params=>{
    return apicall(locationdpoint(params))
}