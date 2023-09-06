// import React from "react";
// class Fun extends React.Component{
//     render(){
//         return
//         <h2>
//             This is Fun with classcomponent
//         </h2>
        
//     }
// }
// export default Fun;

function Fun({tempinfo}){
    const{
        temp,
        humidity,
        pressure,
        country,
        sunrise,
        sunset,
        main,
        name,

    }= tempinfo;
    return (
<>
    {/* <h2>Hello this is fun</h2> */}
    <div className="info">
        <h2 className="location ">CountryName :{country}</h2>
        <h2 className="location1 ">Location :{name}</h2>

        <h2 className="temp">Tempreture :{temp}</h2>
        <h2 className="tempin_max">Pressure :{pressure}</h2>
      </div>

      <div className="wave -one">Humidity :{humidity}</div>
      <div className="wave -two">Condition :{main}</div>
      <div className="wave -three">Sunrise :{sunrise}</div>
      <div className="wave -four">Sunset :{sunset}</div>

      <div className="time">Time :{new Date().toLocaleString()}</div>
      <>Created by Aman1612ap</>
      </>
    );
}
export default Fun;