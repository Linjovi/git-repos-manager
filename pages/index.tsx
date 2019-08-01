// import React from "react";
// import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// // import * as serviceWorker from "./serviceWorker";
import createStore from "./store";
import { Provider } from "react-redux";

const store = createStore();

// ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

import React from 'react';

interface InitialProps {
  query: string;
}

interface Props extends InitialProps {}

class Index extends React.Component<Props> {
  public static getInitialProps({ query }: InitialProps) {
    return { query };
  }

  public render() {
    return (<Provider store={store}><App /></Provider>);
    // return <div>123</div>
  }
}

export default Index;

