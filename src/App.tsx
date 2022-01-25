import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider} from "react-redux";
import store from "store";
import Home from "pages/Home";
import Account from "pages/Account";
import Loading from "components/Loading";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Loading />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
