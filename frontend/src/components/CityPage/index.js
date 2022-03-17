import { useParams } from "react-router-dom";


function CityPage() {

   const { city } = useParams();
   console.log(city)

   return (
     <>
        <h1>{city}</h1>
     </>
   )
}

export default CityPage; 
