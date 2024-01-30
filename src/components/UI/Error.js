import React, {Fragment} from "react";
import ReactDOM from "react-dom";

import Card from "./Card";
import Button from "./Button";

import "./Error.css"

const BackDrop = () => {
    return (
        <div className="backdrop"/>
    )
}

const ModalOverlay = (props) => {
    return (
        <Card className="modal">
            <header className="header">
                <h2>{props.title}</h2>
            </header>
            <header className="content">
                <h2>{props.message}</h2>
            </header>
            <header className="footer">
                <Button onClick ={props.onConfirm}>OK</Button>
            </header>
        </Card>
    )
}

const Error = (props) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(
                <BackDrop onConfirm={props.onConfirm}/>,
                document.getElementById('backdrop-root')
            )}
            {ReactDOM.createPortal(
                <ModalOverlay
                    title={props.title}
                    message={props.message}
                    onConfirm={props.onConfirm}    
                />,
                document.getElementById('overlay-root')
            )
        }
        </Fragment>
    )
}

export default Error