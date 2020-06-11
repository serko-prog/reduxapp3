import React from "react";
import "./App.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import LoginForm from "./components/LoginForm";
import rootReducer from "./store/reducer"

const store = createStore(rootReducer);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Props from Redux
        </p>
        <Provider store={store}> 
          <LoginForm/>
        </Provider>
      </header>
    </div>
  );
}

export default App;
