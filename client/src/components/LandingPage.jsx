import React from "react";
import { Link } from "react-router-dom";
import './LandingPage.css';

export default function LandingPage(){
    return (
        <div className="body">
            <div className="libreta">
                <div className="title">
                    <h1 >Welcome to HenryFood</h1>
                </div>
                <div>
                    <Link to={"/home"}>
                        <button className="button">Get in!</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};