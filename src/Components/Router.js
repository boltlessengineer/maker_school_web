import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Header from './Header';
import Home from '../Routes/Home';
import Intro from '../Routes/Home/Intro';
import About from '../Routes/About';
import Members from '../Routes/Members';
import Projects from '../Routes/Projects';

export default () => (
    <Router>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/intro" exact component={Intro} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Members} />
        <Route path="/projects" exact component={Projects} />
    </Router>
);
