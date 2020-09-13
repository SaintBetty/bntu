import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import MainPage from "../MainPage/MainPage.jsx";
import InfoPage from "../InfoPage/InfoPage";

const App = () => {
  const pages = [
    {
      path: "/",
      component: <MainPage />,
    },
    {
      path: "/:univer",
      component: <InfoPage />,
    },
  ];
  return (
    <BrowserRouter>
      <Switch>
        {pages.map((item, index) => (
          <Route
            exact
            path={item.path}
            component={() => item.component}
            key={`react-router--${index}`}
          />
        ))}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
