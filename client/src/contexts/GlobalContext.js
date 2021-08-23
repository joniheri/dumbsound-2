import { createContext, useReducer } from "react";

export const AppContext = createContext();

const initialState = {
  isLogin: false,
  carts: [],
  user: null,
  isLoading: true,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        isLogin: true,
        user: {
          email: action.payload.email,
          fullname: action.payload.fullname,
          level: action.payload.level,
        },
        isLoading: false,
      };
    case "USER_LOADED":
      return {
        ...state,
        isLogin: true,
        user: {
          email: action.payload.email,
          fullname: action.payload.fullname,
          level: action.payload.level,
        },
        isLoading: false,
      };
    case "AUTH_ERROR":
    case "LOGOUT":
      localStorage.removeItem("token");
      return {
        ...state,
        isLogin: false,
        user: null,
        isLoading: false,
      };
    case "ADD_CART":
      const checkExistProduct = state.carts.filter(
        (product) => product.id === action.payload.id
      );

      if (checkExistProduct.length > 0) {
        return {
          ...state,
          carts: state.carts.map((product) =>
            product.id === action.payload.id
              ? {
                  ...product,
                  qty: product.qty + 1,
                }
              : product
          ),
        };
      }

      return {
        ...state,
        carts: [
          ...state.carts,
          {
            ...action.payload,
            qty: 1,
          },
        ],
      };
    case "REMOVE_CART":
      return {
        ...state,
        carts: state.carts.filter(
          (product) => product.id !== action.payload.id
        ),
      };
    case "REMOVE_CART_ITEM":
      const checkExistProductItem = state.carts.filter(
        (product) => product.id === action.payload.id
      );

      if (checkExistProductItem.length > 0) {
        return {
          ...state,
          carts: state.carts.map((product) =>
            product.id === action.payload.id
              ? {
                  ...product,
                  qty: product.qty - 1,
                }
              : product
          ),
        };
      }
    default:
      throw new Error();
  }
};

export const AppContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={[state, dispatch]}>
      {props.children}
    </AppContext.Provider>
  );
};
