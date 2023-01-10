import { useState } from "react";
import { useEffect } from "react";

const Final=()=>{



  const [Male,setMale]=useState("Ram")
  const [Female,setFemale]=useState("Sita")
 
  const changeTheName=(text)=>{
   setMale(text.target.value)
  
 
   
  }

  const chagneThefemale=(text)=>{

    setFemale(text.target.value)
  }
  

const [data, setData]=useState([]);
const getdetails = async()=>
{  
  const url=`https://love-calculator.p.rapidapi.com/getPercentage?sname=${Male}%20&fname=${Female}&rapidapi-key=4588b9ad84msh21d60197d89bb8dp1efc76jsn7a4fb7938338`
const response= await fetch(url);
const news= await response.json();
console.log(news);
setData(news);
}

useEffect(()=>
{
  
  getdetails();
  
  
},[data]);

return <>
<h2 className="text-center fw-bold text-light mt-2">Love Calculator. Calculate love percentage</h2>
<p className="text-center mt-3  text-light">Here is the <span className="fw-bold" >Love Calculator</span>that lets you  calculate love compatibility and your chances of a successful relationship.</p>
<p className="text-center fw-bold fs-6 mt-4 text-light">Find Love %between</p>
 <div className=" container big-container bg-light mt-4" style={{width:800,height:250}}>
  <div className="row ms-5 ">
    <div className="col-md-5 col-sm-5">
      <div className="row">
        <span className="mt-2 fw-bold">YOUR NAME</span>
        <div className="row mt-3">
        <input className="name"  value={Male} onChange={changeTheName} placeholder="Enter Your Name" required ></input>
        </div>
        <div className="row mt-3">
          <div className="col-md-12 col-sm-6">
          <input type="radio" name="male" ></input><span  className="ms-3 fw-semibold">Male</span>
          </div>
          <div className="col-md-12 col-sm-6 mt-3">
          <input type="radio" name="male"></input><span className="ms-3 fw-semibold">Female</span>
          </div>
        </div>
      </div>
      
      </div>
    <div className="col-md-2 col-sm-2">
      <div className="row">
      <i className="fa-solid fa-heart heart"></i>
      </div>
    </div>
    <div className="col-md-5 col-sm-5">
      <div className="row">
        <span className="mt-2 fw-bold">PARTNER'S NAME</span>
        <div className="row mt-3">
        <input className="name" value={Female}  onChange={chagneThefemale}  placeholder="Enter Partner's Name"  required ></input>
        </div>
        <div className="row mt-3">
          <div className="col-md-12">
          <input type="radio" name="female"></input><span className="ms-3 fw-semibold">Female</span>
          </div>
          <div className="col-md-12 mt-3">
          <input type="radio" name="female"></input><span className="ms-3 fw-semibold">Male</span>
          </div>
        </div>
      </div>
    </div>

  </div>

 </div>

<div className="container mt-4">
  <div className="row">
 <h4 className="text-center mt-3 percentage">{data.percentage} %</h4>
 <h4 className="text-center text-warning">{data.result}</h4>

  </div>

</div>

</>


}
export default Final;

