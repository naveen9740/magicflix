import { createContext, useContext, useReducer, useState } from "react";

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
  const [popup, setPopup] = useState(false);

  return (
    <Context.Provider value={{ user: state.user, dispatch, popup, setPopup }}>
      {children}
    </Context.Provider>
  );
};

export const useAuthContext = () => useContext(Context);
