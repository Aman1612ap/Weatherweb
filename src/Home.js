import Fun from "./Fun.js";
// import "./Home.css"
import React,{useEffect, useState} from "react";
function Home() {
    const[city,setcity]=useState();

    const [tempinfo,setinfo]=useState({ });
    // const [search,setsearch]=useState("mumbai");
    const getweatherinfo=async()=>{
        try {
          // let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=90be24f836ef24e71201a099006ca537`;
          let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=90be24f836ef24e71201a099006ca537`;

          const res=await fetch(url);
          const data=await res.json();
          // console.log(data);
          const {temp,humidity,pressure}=data.main;
          const{name}=data;
          const {country,sunrise,sunset}=data.sys;
          const{main}=data.weather[0];
          // console.log(name);

          const mynewinfo={
              temp,
              humidity,
              pressure,
              country,
              sunrise,
              sunset,
              main,
              name,


          };
          setinfo(mynewinfo);


        } catch (error) {
          console.log(error);
        }
    };
    useEffect(()=>{
      getweatherinfo();

    },[]);
  return (
    <>
      <h4>Check Weather Condition</h4>
      <div className="box">
        {/* <Fun /> */}
        <div className="inputData">
          <input
            type="text"
            placeholder="Enter city name"
            className="inputfeild"
            id="search"
            value={city}
            onChange={(e) => setcity(e.target.value)}
          />
          <button className="searchbutton"
          onClick={getweatherinfo}
          >search</button>
        </div>
        <Fun tempinfo={tempinfo}/>

      </div>
 
      {/*  */}

    </>
  );
}
export default Home;
