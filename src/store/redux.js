import { combineReducers, createStore } from "redux";

// actions.js
export const addLike = (likes) => ({
  type: "ADD_LIKE",
  likes,
});

export const addDislike = (dislikes) => ({
  type: "ADD_DISLIKE",
  dislikes
});

// reducers.js
export const likesReducer = (state = {likes: 0, dislikes: 0}, action) => {
  switch (action.type) {
    case "ADD_LIKE":
      return {
          ...state,
          likes: action.likes + 1
      } 
    case "ADD_DISLIKE":
      return {
          ...state,
          dislikes: action.dislikes + 1
      } 
    default:
      return state;
  }
};

export const reducers = combineReducers({
  likesReducer,
});

// store.js
export function configureStore(initialState = {likes: 0, dislikes: 0}) {
  const store = createStore(reducers, initialState);
  return store;
}

export const store = configureStore();
