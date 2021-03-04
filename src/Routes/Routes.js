import React from 'react'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import MyProvider from '../context/MyProvider'
import Header from '../components/Header'
import Home from '../components/Home'
import ShowTrips from '../components/ShowTrips'
import ShowWishlist from '../components/ShowWishlist'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import NotFound404 from '../components/NotFound404'


const Routes = () => (
    <MyProvider>
        <Router>
            <Header />
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/showTrips' component={ShowTrips}/>
                <Route path='/contact' component={Contact} />
                <Route path='/showWishlist' component={ShowWishlist} />
                <Route path='*' component={NotFound404} />
            </Switch>
            <Footer />
        </Router>
    </MyProvider>
    
)

export default Routes
