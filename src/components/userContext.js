import React from "react"; 

const userContext = React.createContext(); 

const UserProvider = userContext.Provider; 
const UserConsumer = userContext.Consumer;

export {UserConsumer, UserProvider} ; 