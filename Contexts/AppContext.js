import React, {createContext, useState} from 'react';

const AppContext = createContext();

const AppContextProvider = ({children}) => {
  let [state, setState] = useState({
    number: 0,
  });
  const incrementAge = () => {
    setState((prevState) => ({
      number: state.number + 1,
    }));
  };
  const decrementAge = () => {
    setState((prevState) => ({
      ...prevState,
      number: state.number - 1,
    }));
  };

  return (
    <AppContext.Provider value={{state, incrementAge, decrementAge}}>
      {children}
    </AppContext.Provider>
  );
};

export {AppContext, AppContextProvider};
