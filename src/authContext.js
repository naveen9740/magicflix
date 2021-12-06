import { createContext, useContext, useReducer } from "react";

const Context = createContext();
export const AuthContext = ({ children }) => {
  const reducerFxn = (state, action) => {
    switch (action.type) {
      case "Login":
        return { ...state, user: action.payload };
      case "Logout":
        return { ...state, user: null };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducerFxn, { user: null });
  console.log(state);
  return (
    <Context.Provider value={{ user: state.user, dispatch }}>
      {children}
    </Context.Provider>
  );
};

export const useAuthContext = () => useContext(Context);
