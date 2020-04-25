import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Header from './Header';
import Home from '../Routes/Home';
import About from '../Routes/About';
import Contact from '../Routes/Contact';
import Projects from '../Routes/Projects';

export default () => (
    <Router>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/projects" exact component={Projects} />
    </Router>
);
