import React, { Component, useEffect } from "react";
import "../App.css";
import styled from "styled-components";
import './Card.css'
import Button from "../elements/Button";

function Card(props) {

    return (
        <div className="card">
            <div className="container">
                <img src={props.photo} alt="Profile Picture" /><br />
                <h4 className="fullName">{props.name}</h4>
                <h4>{props.nim}</h4>
                <h4>{props.email}</h4>
                <a href={props.github} target="_blank">
                    <Button background="#008388" type="submit">
                        Kunjungi Github Kami
                    </Button>
                </a>
            </div>
        </div>
    );
}

export default class Profile extends Component {
    render() {
        return (
            <div className="User-info">
                <div className="contents">
                    <div className="contents-item">
                        <Card
                            photo="https://avatars.githubusercontent.com/nay-fi"
                            name="Nur Ayuk Febreyanti"
                            nim="21120120130053"
                            email="nayyafyn@gmail.com"
                            github="https://github.com/nay-fi"
                        />
                    </div>
                    <br />
                    <div className="contents-item">
                        <Card
                            photo="https://avatars.githubusercontent.com/SachikoFitriaRamandanti"
                            name="Sachiko Fitria Ramadhanti"
                            nim="21120120140103"
                            email="sachikofitria354@gmail.com"
                            github="https://github.com/SachikoFitriaRamandanti"
                        />
                    </div>
                    <br />
                    <div className="contents-item">
                        <Card
                            photo="https://avatars.githubusercontent.com/kiranija"
                            name="Kirani Juli Andini"
                            nim="21120120120033"
                            email="juliakirani27@gmail.com"
                            github="https://github.com/kiranija"
                        />
                    </div>
                    <br />
                    <div className="contents-item">
                        <Card
                            photo="https://avatars.githubusercontent.com/YogaSadhewoS"
                            name="Yoga Sadhewo Salahudin"
                            nim="21120120130113"
                            email="xahacker.alfa@gmail.com"
                            github="https://github.com/YogaSadhewoS"
                        />
                    </div>
                    
                </div>
            </div>
        )
    }
};