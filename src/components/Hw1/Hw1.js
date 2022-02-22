import React from "react";


export class Hw1 extends React.Component {
    componentDidMount() {
        alert("Компонент открылся");
    }

    componentWillUnmount() {
        alert("Компонент закрылся");
    }

    render() {
        return (
            <div>
                <h2>Hello!</h2>
            </div>
        );
    }
}