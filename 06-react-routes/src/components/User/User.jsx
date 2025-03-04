import { useParams } from "react-router-dom";
import React from "react";

function User() {
    const {id} = useParams();
    return (  
        <div className="bg-gray-600 text-white text-center p-4 text-3xl">User : {id}</div>
    );
}

export default User;