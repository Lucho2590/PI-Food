import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage(){
    return (
        <div>
            <h1>Welcome to Hendryfood</h1>
            <Link to={"/home"}>
                <button>Get Home</button>
            </Link>
        </div>
    );
};