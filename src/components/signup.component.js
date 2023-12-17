import React, { Component } from 'react'

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name:"",
            last_name:"",
            email:"",
            password:"",
            userType:"",
            wallet:0.0,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const {first_name, last_name, email, password, userType, wallet} = this.state;
        // Validate that userType is not empty

        if (!userType) {
            alert('Please select a user type (Company or Investor)');
            return;
        }
        fetch("http://localhost:8080/registerUser", {
            method:"POST",
            crossDomain:true,
            headers:{
                "Content-Type":"application/json",
                Accept:"application/json",
                "Access-Control-Allow-Origin":"*",
            },
            body:JSON.stringify({
                first_name,
                last_name,
                email,
                password,
                userType,
                wallet,
            }),
        }).then((res)=>res.json())
            .then((data)=>{
                console.log(data, "userRegister");
                window.location.href="./sign-in";
            });
    }
  render() {
    return (
        <form onSubmit={this.handleSubmit}>
            <h3>Sign Up 🍋</h3>
            <div className="mb-3">
                <select
                    className="form-control"
                    onChange={e => this.setState({userType: e.target.value})}
                >
                    <option value="">User type</option>
                    <option value="company">Company</option>
                    <option value="investor">Investor</option>
                </select>
            </div>

            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="First name"
                    onChange={e => this.setState({first_name: e.target.value})}
                />
            </div>

            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Last name"
                    onChange={e => this.setState({last_name: e.target.value})}
                />
            </div>

            <div className="mb-3">
                <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    onChange={e => this.setState({email: e.target.value})}
                />
            </div>

            <div className="mb-3">
                <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    onChange={e => this.setState({password: e.target.value})}
                />
            </div>

            <div className="d-grid">
                <button type="submit" className="btn">
                    Sign Up
                </button>
            </div>
            <p className="forgot-password">
                Have an account? <a href="/sign-in">sign in</a>
            </p>
        </form>
    )
  }
}
