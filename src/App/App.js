import React, {useEffect, useState} from "react";
import MainTemplate from "../components/MainTemplate/MainTemplate";
import Home from "../views/Home/Home";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Makeup from "../views/Makeup/Makeup";
import Info from "../views/Info/Info";
import Logo from "../assets/Images/logo.svg";
import MakeupDetail from "../views/MakeupDetail/MakeupDetail";


function App() {

    const nav = [
        {url: "/", text : "Home", exact: true},
        {url: "/makeup", text:"Makeup", exact: false},
        {url: "/info", text:"info", exact: true}
    ];

    const [data, setData] =useState([]);

    useEffect(()=>{
        fetch ("https://makeup-api.herokuapp.com/api/v1/products.json?brand=revlon").then((r) => r.json()).then((r)=>{
            setData(r);
        })
            .catch((e)=>console.log(e))
    }, []);




    return (
        <BrowserRouter basename="clairevlon">
            <MainTemplate
                footerCourseName="Tecnologie e Applicazioni dnei sistemi distribuiti"
                footerCourseLink="https://elearning.unimib.it/course/view.php?id=37789"
                navItems={nav}
                logo={Logo}
                >
                <Switch>
                    <Route exact path="/">
                        <Home data={data}/>
                    </Route>
                    <Route exact path="/makeup">
                        <Makeup data={data}/>
                    </Route>
                    <Route exact path="/info" component={Info}/>
                    <Route exact path="/product/:number">
                        <MakeupDetail data={data}/>
                    </Route>


                </Switch>
         </MainTemplate>
        </BrowserRouter>
    )
}

export default App;
