import React, { useState, useEffect } from 'react';
import Home from './Home';
import Intro from './Intro';

export default function HomePresenter() {
    const [intro, setIntro] = useState(true);
    const localIntro = sessionStorage.getItem('intro');
    useEffect(() => {
        console.log('hey!');
        if (localIntro !== null) {
            console.log('set!');
            setIntro(false);
        }
        if (intro) {
            setTimeout(function () {
                setIntro(false);
                sessionStorage.setItem('intro', false);
            }, 5000);
        }
    }, []);
    return intro ? <Intro /> : <Home />;
}
