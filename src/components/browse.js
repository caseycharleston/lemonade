import React, { Component } from "react";
import { Link } from 'react-router-dom';
import '../styles/browse.css';

export default class Browse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            companies: [
                { id: 1, name: "Fetii", image: "https://www.fetii.com/public/front-assets/v3/images/news/rideshare-entrepreneur-named-to-austin-25-under-25-list-1.jpg" },
                { id: 2, name: "Helios Solutions", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/0_Alexander-Helios_Capitolini_%281%29.JPG/250px-0_Alexander-Helios_Capitolini_%281%29.JPG"},
                { id: 3, name: "BrainArt!", image: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/human-brain-art-anatomy-gift-medical-student-gift-white-lotus.jpg"},
                { id: 4, name: "Litmus", image: "https://cdn.shopify.com/s/files/1/0433/7172/4967/files/litmus_test_2_1024x1024.jpg?v=1625230948" },
                { id: 5, name: "Clear", image: "https://integratedbiometrics.com/wp-content/uploads/2020/03/clear-company-logo.png" },
            ],
            userData: '',
        };
    }

    componentDidMount() {
        fetch("http://localhost:8080/userData", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                token: window.localStorage.getItem("token"),
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data, "userData");
                this.setState({ userData: data.data });
            });
    }

    render() {
        return (
            <div>
                <h1 className="title">Browse companies who've joined Lemonade:</h1>
                <div className="companies-grid">
                    {this.state.companies.map((company) => (
                        <Link key={company.id} to={`/company/${company.name}`}>
                            <div
                                className="company-card"
                                style={{ backgroundImage: `url(${company.image})` }}
                            >
                                <div className="company-overlay">
                                    <h3>{company.name}</h3>
                                </div>
                            </div>
                        </Link>
                    ))}

                </div>
            </div>

        );
    }
}
