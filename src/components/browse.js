import React, { Component } from "react";
import '../styles/browse.css';

export default class Browse extends Component {
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

    render() {
        return (
            <div>hey</div>
        );
    }
}


