import React, { Component } from "react";

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: "",
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
        const { userData } = this.state;

        // Check if userType is available in userData
        if (userData && userData.userType) {
            // Conditionally render different welcome messages based on userType
            let welcomeMessage;
            if (userData.userType === "company") {
                welcomeMessage = "Welcome, Company!";
            } else if (userData.userType === "investor") {
                welcomeMessage = "Welcome, Investor!";
            } else {
                welcomeMessage = "Welcome!";
            }

            return (
                <div>
                    <h2>{welcomeMessage}</h2>
                    <p>
                        Name: <span>{userData.first_name}</span>
                    </p>
                    <p>
                        Email: <span>{userData.email}</span>
                    </p>
                    <p>
                        Type: <span>{userData.userType}</span>
                    </p>
                </div>
            );
        } else {
            return <div>Loading...</div>;
        }
    }
}
