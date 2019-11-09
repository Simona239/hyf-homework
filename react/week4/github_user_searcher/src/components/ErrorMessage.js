import React from "react";
import { contextState } from "../context/context";

export default function Error() {
  return (
    <contextState.Consumer>
      {({ errorText }) => {
        return (
          <div className="err">There is an error: {errorText}</div>
        )
      }}
    </contextState.Consumer>)
}