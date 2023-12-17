import React, { Component } from "react";
import '../styles/Profile.css';

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: '',
            isSidebarOpen: false,
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

    chooseProverb() {
        let proverbs = [
            "Use your lemons wisely!",
            "The background is hypnotizing you. You will tell your friends to use Lemonade. oooooo....",
            "9/10 Lemon farmers recommend Lemonade.",
            "When life gives you lemons, invest them into new startups and make more lemons.",
            "One Lemillion Dollars!!!"
        ];

        // Generate a random index to pick a proverb
        const randomIndex = Math.floor(Math.random() * proverbs.length);

        // Return the randomly chosen proverb
        return proverbs[randomIndex];
    }

    render() {
        const { userData } = this.state;

        // Check if userType is available in userData
        if (userData && userData.userType) {
            // Conditionally render different welcome messages based on userType
            let welcomeMessage = `Welcome, ${userData.first_name}!`;

            return (
                <div className="profile-container">
                    <div className="lemon-rain">
                        {Array.from({ length: 20 }, (v, index) => (
                            <div
                                key={index}
                                className="lemon"
                                style={{
                                    left: `${Math.random() * 100}vw`,
                                    top: `${Math.random() * 100}vh`,
                                    animationDuration: `${Math.random() * 2 + 10}s`, // Random duration for variation
                                    animationDelay: `${Math.random() * 3}s`, // Random delay for position change
                                }}
                            >
                                🍋
                            </div>
                        ))}
                    </div>

                    <div className="profile-content">
                        <h2>{welcomeMessage}</h2>
                        <h3 className="proverb">"{this.chooseProverb()}"</h3>
                    </div>
                </div>
            );
        } else {
            return <div>Loading...</div>;
        }
    }
}
