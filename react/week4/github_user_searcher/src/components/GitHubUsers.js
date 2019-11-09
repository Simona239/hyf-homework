import React, { Component } from "react";
import Loading from "./LoadingState";
import UserNotFound from "./UserNotFound";
import Error from "./ErrorMessage";
import { contextState } from "../context/context";

export default class Users extends Component {
  render() {
    return (
      <contextState.Consumer>
        {({ userName, users,  isLoading, errorText }) => {
          return (
            <div>
              <div className="loading">
                {isLoading && <Loading />}
                {errorText && <Error error={errorText} />}
              </div>
              {userName === '' && <UserNotFound />}
              <ul>
                {users.map(user => (
                  <li key={user.id}>{user.login}</li>
                ))}
              </ul>
            </div>
          )
        }
        }
      </contextState.Consumer>
     );
    }
  }