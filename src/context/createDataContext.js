import React, { useReducer } from "react";

//Setup a Generic Context Functions Components
// reducer === object with state and actions
// actions === functions that changed the state of the data
// initiaState === [],"",...

export default (reducer, actions, initialState) => {
  const Context = React.createContext(); //1.

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState); // 2.

    const boundActions = {};
    //actions === {addBlogPost: (dispatch) => {return () => {} }}
    for (let key in actions){
    
    // key === 'addBlogPost'
    boundActions[key] = actions[key](dispatch)
    
    }

    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };
  return { Context, Provider };
};
