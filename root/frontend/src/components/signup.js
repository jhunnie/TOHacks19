import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import fetch from 'node-fetch';
const api_base_url= "http://localhost:8888/location";

class SignUp extends Component{
    constructor(props){
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            interests:'',
            password:''
        }
    }

    handleFirstChange = (event) => {
        this.setState({
            firstname: event.target.value,
        });
    };
    handleLastChange = (event) => {
        this.setState({
            lastname: event.target.value,
        });
    };
    handleEmailChange = (event) => {
        this.setState({
            email: event.target.value,
        });
    };
    handleInterestChange = (event) => {
        this.setState({
            interests: event.target.value,
        });
    };
    handlePasswordChange = (event) => {
        this.setState({
            password: event.target.value,
        });
    };
    handleClick(event){
        let apiUrl = api_base_url+'/add_user';
        let self = this;
        console.log(this.state);

        if(this.state.firstname.length>0 && this.state.lastname.length>0 && this.state.email.length>0 && this.state.password.length>0 && this.state.interests.length>0){
            fetch(apiUrl,
                {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": '*'
                    },
                    body: JSON.stringify({
                            email: this.state.email,
                            password: this.state.password,
                            interests: this.state.interests,
                            first: this.state.firstname,
                            last: this.state.lastname
                        }
                    )
                }).then(my_resp => my_resp.json())
                .then(response =>{
                    console.log(response);
                    if(response["code"] === 200){
                        alert("User created successfully");
                        window.location.href = ('http://localhost:3000/')
                    }
                    else{
                        console.log("Some error occurred: ",response.data.code);
                    }
                }).catch(function (error) {
                console.log(error);
            });
        }
        else{
            console.log(this.state.firstname.length>0);
            console.log(this.state.lastname.length>0);
            console.log(this.state.email.length>0);
            console.log(this.state.password.length>0);
            console.log(this.state.username.length>0);
            alert("Input field value is missing");
        }
    }
    componentWillReceiveProps(nextProps){
        console.log("nextProps",nextProps);
    }
    render() {
        return(
            <div style={{
                marginTop: "3%",
                marginLeft: "38%",
                position: "center",
                alignItems: "center",
                width: "25%"
            }}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="first"
                    label="First Name"
                    name="first"
                    autoFocus
                    onChange={this.handleFirstChange}
                />
                <br/>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="last"
                    label="Last Name"
                    name="last"
                    autoFocus
                    onChange={this.handleLastChange}
                />
                <br/>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    onChange={this.handleEmailChange}
                />
                <br/>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="interests"
                    label="Interests"
                    name="interests"
                    autoFocus
                    onChange={this.handleInterestChange}
                />
                <br/>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={this.handlePasswordChange}
                />
                <br/>
                <Button variant="contained" color="primary" onClick={(event) => this.handleClick(event,this.props.role)} style={{
                    marginTop: "5%",
                    marginLeft: "30%"
                }}>
                    Sign Up
                </Button>
            </div>
        )
    }
}

const style = {
    margin: 15,
};


export default SignUp;