import React from 'react';
import './../App.css';
import logo from './../../src/images/logo.png'

const Hours = () => {
    return (
        <div className="page" id="hours-page">
            <div className="primary-font bolder" id="hours-title">STORE HOURS</div>
            <div id="hours-text">
                <div className="primary-font bolder hours-top-margin" id="hours-mon-sat">Monday - Saturday</div>
                <div className="primary-font italic hours-bottom-margin" id="hours-closed-sundays">(closed Sundays)</div>
                <div className="secondary-font" id="hours-lunch">Lunch</div>
                <div className="secondary-font bold hours-bottom-margin" id="hours-lunch-time">11:00am - 3:00pm</div>
                <div className="secondary-font" id="hours-dinner">Dinner</div>
                <div className="secondary-font bold " id="hours-dinner-time">4:00 - 9:00pm</div>
                <div className="secondary-font italic" id="hours-last-call">last call at 8:30pm</div>
            </div>
        </div>
    )
}

export default Hours