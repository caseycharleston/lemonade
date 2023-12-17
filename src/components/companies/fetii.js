// Company1.js
import React from 'react';
import { Link } from 'react-router-dom';
import './CompanyStyles.css'; // Import your styling file

const Fetii = () => {
    return (
        <div className="company-details">
            <h1 className="company-header">Fetii</h1>
            <img
                src="https://www.fetii.com/public/front-assets/v3/images/news/rideshare-entrepreneur-named-to-austin-25-under-25-list-1.jpg"
                alt="Fetii Image"/>
            <p className="company-text">Fetii offers group ridesharing solutions through our user-friendly app. With our
                technology, groups, commuters, and corporations can now seamlessly order a Fetii vehicle on-demand or
                pre-scheduled to fulfill their transportation needs.
                Fetii utilizes a UPC check-in system that allows users to seamlessly split the fare when boarding. When
                scanning a Fetii vehicles’ QR code riders can select how many passengers they’d like to pay for.</p>
            <p className="company-info">The Culture</p>
            <p className="company-text">Are you looking to join a team that is reimagining group transportation and
                striving to make a positive impact? At Fetii, we believe that the way groups move can always be
                improved, and we are dedicated to finding innovative solutions that enhance safety and the overall
                transportation experience. We are a team of bold, driven individuals who are not afraid to take on
                complex problems and come up with ambitious solutions. We work at the speed of now and our solutions are
                implemented in real time for thousands of groups.</p>
            <p className="company-info">The Impact</p>
            <p className="company-text">
                Fetii allows cities the opportunity to integrate their current transit systems with on-demand group
                transportation markets, thus increasing ridership and reducing costs.
                By deploying a network of digitized vehicles, cities can now efficiently service everyday consumers and
                corporations in metropolitan areas while simultaneously decreasing traffic congestion and carbon
                emissions.</p>

            <p className="company-info">The Latest</p>
            <p className="company-update">
                <h3>Exciting Changes to Our Lineup</h3>
                <h4 className="company-update-date">December 17th, 2023</h4>
                Hey all, Fetii here with new updates on our lineup... Read More

            </p>
            <Link to="/profile-alt">
                <button className="invest-button">Invest in Fetii</button>
            </Link>
        </div>
    );
};

export default Fetii;
