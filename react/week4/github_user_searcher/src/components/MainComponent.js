import React from "react";
import "../App.css";
import Users from "./GitHubUsers";
import Input from "./InputContainer";
import * as API from "../githubApi";
import {states, contextState} from "../context/context";

class MainComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: states.userName,
            users: states.users,
            isLoading: states.isLoading,
            errorText: states.errorText
        };
    }

    async componentDidMount() {
        this.getData();
    }

    async getData() {
        if (this.state.userName) {
            this.setState({ isLoading: true });
            const response = await API.getUsers(this.state.userName);
            const errorText = typeof response === 'string' ? response : null;
            this.setState({ errorText: errorText });
            const users = response.items || [];
            this.setState({ users, isLoading: false });
        }
    }

    updateData = (value) => {
        this.setState({ userName: value, users: [], errorText: '' }, () => this.getData());
    }

    render() {
        const { userName, users,  isLoading, errorText } = this.state;
        return (
            <contextState.Provider value={{ userName, users, isLoading, errorText }}>
                <div className="App">
                    <h1 className="header">GitHub Users Search</h1>
                    <Input updateData={this.updateData} />
                    <Users data={this.state} />
                </div>
            </contextState.Provider>
        );
    }
}

export default MainComponent;