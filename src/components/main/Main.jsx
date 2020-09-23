import React from "react";
import {Switch , Route} from "react-router";
import Home from "../../pages/Home/Home";
import Auth from "../../pages/Auth/Auth";
import News from "../../pages/News/News";

function Main() {
    return (
        <main>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/news' component={News}/>
                <Route path='/auth' component={Auth}/>
            </Switch>
        </main>
    )
};

export default Main