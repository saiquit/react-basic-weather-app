import React from "react";

const Output = ({ data }) => {
  if (data) {
    console.log(data);
    const { location, current } = data;
    if ((location, current)) {
      const { temperature, wind_speed, humidity, is_day } = current;
      const { name, country } = location;
      const date = new Date().toLocaleDateString();
      return (
        <div className="container details ml-4 bg ">
          <div className="row">
            <div className="col-md-10 place ml-4">
              <p className="text-secondary ml-3 date">{date}</p>
              <h1 className="heading">
                {name}, {country}
                <span> {is_day.length > 2 ? "Day" : "Night"}</span>
              </h1>
            </div>
          </div>
          <div className="row des ml-4">
            <div className="col-md-12 d-flex  ">
              <div className="col-md-3 border-right-1">{temperature}°C</div>
              <div className="col-md-3">
                <strong>Wind Speed: </strong>
                <br />
                {wind_speed} KM
              </div>
              <div className="col-md-3">
                <strong>Humidity:</strong>
                <br /> {humidity}
              </div>
              <div className="col-md-3"></div>
            </div>
          </div>
        </div>
      );
    }
    return null;
  }
  return "loading";
};

export default Output;
