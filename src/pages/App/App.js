import React from "react";
import { Route, Switch } from "react-router-dom";
import MainPage from '../MainPage/MainPage'

const App = () => {
  const pages = [
    {
      path: "/",
      component: <MainPage />,
    },
  ];
  return (
    <Switch>
     {pages.map((item, index) => (
        <Route
          exact
          path={item.path}
          component={() => item.component}
          key={`react-router--${index}`}
        >
          {item.component}
        </Route>))}
      </Switch>
    );
}

export default App;
