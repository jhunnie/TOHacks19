import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import {red} from "@material-ui/core/colors";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

class User extends Component {
    constructor(props) {
        super(props)
        this.state = {
            image: [],
            display_image_tag: 'None',
            display_choose: '',
            all_image_tags: []
        };

        this.loadFile = this.loadFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        console.log('photo received: ', event.target.files[0].name);
        this.setState({
            photo: event.target.files[0]
        });
    }

    handleRefresh(event){
        window.location.href = ('http://localhost:3000/charities');
    }
    loadFile(event){

        console.log('photo received-1: ', event.target.files[0].name);
        this.setState({
            photo: event.target.files[0]
        });
        let apiUrl ="http://localhost:8888/location/return_image_tag";
            fetch(apiUrl,
                {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": '*'
                    },
                    body: JSON.stringify({
                            image_name: event.target.files[0].name
                        }
                    )
                }).then(my_resp => my_resp.json())
                .then(response =>{
                    console.log(response);
                    let img = [];
                    for(let i=0; i < response.length && i < 3; i++){
                        img.push(
                            <ListItem>
                                <ListItemText primary={response[i].name}/>
                            </ListItem>
                        );
                    }
                    this.setState({
                        image: img,
                        display_image_tag: '',
                        display_choose: 'None'
                    })

                }).catch(function (error) {
                console.log(error);
            });
    };


    render(){
        return (
            <div>
                <Card style={{
                    position: "center",
                    width: "30%",
                    display: "inline-block",
                    height: '20vw',
                    marginLeft: "35%",
                    marginTop: "5%",
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
                        title="Upload to donate today"
                    />
                    <CardContent>
                        <Typography variant="h4" component="h2">
                            Welcome to Add Item
                        </Typography>
                        <form style={{
                            marginTop: "5%",
                            fontSize: 20,
                        }} onSubmit={this.handleSubmit}>
                            Upload An Image Below:
                            <input type="file" accept="image/*" name="image" id="file" onChange={this.loadFile}
                                   style={{"display": "none"}}></input>
                            <br/><label className='btn btn-primary' htmlFor="file" style={{"cursor": "pointer", marginTop: "5%"}}>Choose
                            File</label>
                            {/* <p><img id="output" width="200" alt='upload' /></p> */}
                        </form>
                    </CardContent>
                </Card>
                <Card style={{
                    position: "center",
                    width: "30%",
                    display: this.state.display_image_tag,
                    marginLeft: "35%",
                    marginTop: "5%",
                    textAlign: "center",
                    backgroundColor: "#FA9A85"
                }}>
                    <CardContent>
                        <Typography variant="h4" component="h2">
                           The Following Items Have Been Found Donate-able:
                        </Typography>
                        <List>
                            {this.state.image}
                        </List>
                    </CardContent>
                </Card>
                <Button variant="contained" color="primary" onClick={(event) => this.handleRefresh(event)} style={{
                    display: this.state.display_image_tag,
                    marginTop: "5%",
                    marginLeft: "46%"
                }}>
                    Find Charities
                </Button>
            </div>
        );
    }
}

export default User;