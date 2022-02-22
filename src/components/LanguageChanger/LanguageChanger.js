import React from "react";
import { connect } from "react-redux";
import { actionEng, actionRu } from "../../redux/action";



class LanguageChanger extends React.Component {
    constructor() {
        super();
        this.handleClickEnglish = this.handleClickEnglish.bind(this);
        this.handleClickRussian = this.handleClickRussian.bind(this);
    }

    handleClickEnglish() {
        this.props.dispatch(actionEng);
    }

    handleClickRussian() {
        this.props.dispatch(actionRu);
    }

    render() {
        return (
            <div>
                <h1>{this.props.languageChanger}</h1>
                <button onClick={this.handleClickEnglish}>English</button>
                <button onClick={this.handleClickRussian}>Русский</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        languageChanger: state,
    }
}

export default connect(mapStateToProps)(LanguageChanger);