import { useState } from "react";
import { useEffect } from "react";

const Final=()=>{

const [data, setData]=useState([]);
const url="https://love-calculator.p.rapidapi.com/getPercentage?sname=Ram%20&fname=Sita&rapidapi-key=4588b9ad84msh21d60197d89bb8dp1efc76jsn7a4fb7938338"
const getdetails = async()=>
{  
const response= await fetch(url);
const news= await response.json();
console.log(news);
setData(news);

}
   
useEffect(()=>
{


getdetails();


},[]);

return <>
<h2 className="text-center">Love Calculator. Calculate love percentage</h2>
<p className="text-center">Here is the <span className="fw-bold" >Love Calculator</span>that lets you  calculate love compatibility and your chances of a successful relationship.</p>



  {
          data.map((news)=> {
            return (
              <>
                <div className="container">
                 <p>{news.result}</p>
                </div>
          
             </>
          )

          })

  }

</>


}
export default Final;