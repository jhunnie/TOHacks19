import React, { Component } from 'react';
import '../App.css';
import { Form, Col, Button } from 'react-bootstrap';

class Charity extends Component {
    constructor(props) {
        super(props)
        this.state = {
            latitute: '',
            longitude: '',
            needs: [],
            name: '',
            address: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.handleCheckbox = this.handleCheckbox.bind(this);
    }

    onChangeName(event) {
        this.setState({ name: event.target.name });
    }

    onChangeAddress(event) {

    }

    handleCheckbox(event) {

    }

    handleSubmit(event) {

    }

    render() {
        return (
            <div>
                <form>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="inputEmail4">Charity Name</label>
                            <input type="email" class="form-control" id="inputEmail4" placeholder="Email" />
                        </div>
                    </div><br />
                    <div class="form-row">
                        <div class="form-group">
                            <label for="inputAddress">Address</label>
                            <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
                        </div>
                        <div class="form-group">
                            <label for="inputAddress2">Address 2</label>
                            <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="inputCity">City</label>
                            <input type="text" class="form-control" id="inputCity" />
                        </div>
                        <div class="form-group col-md-4">
                            <label for="inputState">Province</label>
                            <select id="inputState" class="form-control">
                                <option selected>ON</option>
                                <option>AB</option>
                                <option>BC</option>
                                <option>MB</option>
                                <option>NB</option>
                                <option>NL</option>
                                <option>NT</option>
                                <option>NS</option>
                                <option>NU</option>
                                <option>PE</option>
                                <option>QC</option>
                                <option>SK</option>
                                <option>YT</option>
                            </select>
                        </div>
                        <div class="form-group col-md-2">
                            <label for="inputZip">Zip</label>
                            <input type="text" class="form-control" id="inputZip" />
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="gridCheck" />
                            <label class="form-check-label" for="gridCheck">
                                Check me out</label>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary">Sign in</button>
                </form>
            </div>
        );
    }
}

export default Charity;