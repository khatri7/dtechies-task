import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "store";
import Home from "pages/Home";
import Account from "pages/Account";
import Loading from "components/Loading";
import AddScore from "pages/AddScore";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Loading />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/account" element={<Account />} />
          <Route path="/add-score" element={<AddScore />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
