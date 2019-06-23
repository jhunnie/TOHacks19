import React, { Component } from 'react';
import '../App.css';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { red } from '@material-ui/core/colors';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Donors from '../donors.png';
import Charity from '../charity.png';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
        };
    }

    render() {
        return (
            <div style={{
                marginTop: "7%"
            }}>
                <Card style={{
                    width: "30%",
                    display: "inline-block",
                    height: '35vw',
                    marginLeft: "17%",
                    textAlign: "center",
                    backgroundColor: "#FA9A85"
                }}>
                    <CardHeader
                        avatar={
                            <Avatar style={{
                                backgroundColor: red[500]
                            }}>
                                U
                            </Avatar>
                        }
                        title="Users looking to donate today"
                    />
                    <CardContent>
                        <Typography variant="h4" component="h2">
                            Donors
                        </Typography>
                    </CardContent>
                    <img style={{ marginTop: '5%', height: 140 }} src={Donors} alt='' /> <br />
                    <Button variant="contained" color="primary" a href="/signup" style={{
                        marginTop: "5%"
                    }}>
                        Sign Up Today
                    </Button> <br />
                    <Button variant="contained" color="primary" style={{
                        marginTop: "5%"
                    }} a href="/user">
                        donate
                    </Button>
                </Card>
                <Card style={{
                    textAlign: "center",
                    width: "30%",
                    display: "inline-block",
                    height: '35vw',
                    marginLeft: "2%",
                    backgroundColor: "#FA9A85"
                }}>
                    <CardHeader
                        avatar={
                            <Avatar style={{
                                backgroundColor: red[500]
                            }}>
                                C
                            </Avatar>
                        }
                        title="Charities looking to find users"
                    />
                    <CardContent>
                        <Typography variant="h4" component="h2">
                            Charity
                        </Typography>
                    </CardContent>
                    <img style={{ marginTop: '5%', height: 140 }} src={Charity} alt='' /> <br />
                    <Button variant="contained" color="primary" a href="/charity" style={{
                        marginTop: "5%"
                    }}>
                        Log in
                    </Button>
                </Card>

            </div>
        );
    }
}

export default Home;