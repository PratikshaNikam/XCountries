import React,{useEffect,useState} from "react"; 

const Country = () => {
  return (
    <div>
      <p>Country</p>
    </div>
  )
    }


function Countries() {
  // const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const [countries,setCountries]=useState([])
  
  useEffect(() => {
   fetch("https://xcountries-backend.azurewebsites.net/all").then((res)=>res.json()).then((data)=>setCountries(data))
  }, []);

  console.log(countries)
  return (
    <div style={{display:"flex", flexDirection:"column",flexWrap:"wrap"}}>
      {countries.map((item) => {
        return <Country />
      })}
    </div>
  )
}

export default Countries;
