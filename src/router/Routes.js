import React from "react";
import HomeLightAnimation from "../views/all-home-version/HomeLightAnimation";
import NotFound from "../views/NotFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollTopBehaviour from "../components/ScrollTopBehaviour";

const Routes = () => {
    return ( <
        >
        <
        Router >
        <
        ScrollTopBehaviour / >
        <
        Switch >
        <
        Route path = "/"
        component = { HomeLightAnimation }
        /> <
        Route component = { NotFound }
        /> <
        /Switch> <
        /Router> <
        />
    );
};

export default Routes;