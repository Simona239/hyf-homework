import React from "react";

export const states = {
  userName: '',
  users: [],
  isLoading: false,
  errorText: ''
};

export const contextState  = React.createContext({
  states: states,
});