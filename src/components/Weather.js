import React from 'react'
// import weatherIcon from '../images/weather.png'

export default function Weather(props) {
    const {city,country,temp,temp_max,temp_min,description,icon} = props.data;
    return (
        <div className="container">
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <div className="cont-data">
                            <h1 className="text-center">{city},{country}</h1>
                            <h5 >
                                <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />
                            </h5>
                            <h2 className="display-1"> {temp} &deg;</h2>
                            <h3>
                                <span className="display-3 mx-3"> {temp_max} &deg;</span>
                                <span className="display-3 mx-3"> {temp_min} &deg; </span>
                            </h3>
                            <h5 className="display-2"> {description}</h5>
                        </div>
                    </div>
                </div>
            </div>
    )
}

