import React,{Component} from 'react';
import './css/style.css'


// components 
import Form from './components/Form';
import Weather from './components/Weather';
import Error from './components/Error';

const API_KEY = "3f5a8d36d96c810dabf652d54a0d110f"

export default class App extends Component{


  state = {
    city:'cairo',
    country:'egypt',
    icon:'',
    temp:0,
    temp_min:0,
    temp_max:0,
    description:'',
    status:false,
    error:false,
  }



  getData = async (e)=>{
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`)
    const data = await response.json()
    // console.log(response)
    if(response.status == 200)
    {
      this.setState({
        city:city,
        country:country,
        temp:this.convertToSilsious(data.main.temp),
        temp_min:this.convertToSilsious(data.main.temp_min),
        temp_max:this.convertToSilsious(data.main.temp_max),
        description:data.weather[0].description,
        icon:data.weather[0].icon,
        status:true,
        error:false
  
      })
    }
    else 
    {
        this.setState({error:true})
    }


    
    
  }


  convertToSilsious = (temp)=>{
    return Math.floor(temp - 273.15)
  }

  render(){
    return (
      <div>
        <Form  getData={this.getData} />
         {this.state.error  ? <Error/> : '' }
         {this.state.status  ? <Weather  data={this.state} /> : '' }
      </div>
    );
  }
  
}


















// https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}








