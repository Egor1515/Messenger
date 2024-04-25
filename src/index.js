"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_dom_1 = require("react-dom");
var react_redux_1 = require("react-redux");
require("./index.css");
var App_1 = require("./App");
var reportWebVitals_1 = require("./reportWebVitals");
var configureStore_1 = require("./configureStore");
react_dom_1.default.render(<react_1.default.StrictMode>
    <react_redux_1.Provider store={configureStore_1.default}>
      <App_1.default />
    </react_redux_1.Provider>
  </react_1.default.StrictMode>, document.getElementById('root'));
(0, reportWebVitals_1.default)();
