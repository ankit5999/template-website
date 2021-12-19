import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Holi1 from './Holi1';




function Holilink() {
    return (
        <>
        <Switch>
        <Route exact path='/holi1' component={Holi1} />
        </Switch>
        </>
    )
};

export default Holilink;
