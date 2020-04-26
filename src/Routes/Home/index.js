import React, { useState, useEffect } from 'react';
import Home from './Home';
import Intro from './Intro';

export default function HomePresenter() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(function () {
            setLoading(false);
        }, 5000);
    }, []);
    return loading ? <Intro /> : <Home />;
}
