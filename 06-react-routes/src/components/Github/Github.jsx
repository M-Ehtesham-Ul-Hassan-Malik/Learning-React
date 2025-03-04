import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {

    // const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch(`https://api.github.com/users/M-Ehtesham-Ul-Hassan-Malik`)
    //     .then(response => response.json()) 
    //     .then(data =>{
    //         console.log(data)
    //         setData(data)
    //     }
    // )
    // }, [] ) 


    const data = useLoaderData()

    return (  
        <div className="text-center m-4 bg-gray-700 text-white p-4 text-4xl ">
            Github Follwers: {data.followers}
            <img className="text-center" width={300} src={data.avatar_url} alt="Profile Picture" />
        </div>
    );
}

export default Github;

export const githubInfo = async () => {
    const response = await fetch(`https://api.github.com/users/M-Ehtesham-Ul-Hassan-Malik`);
    return response.json()
}