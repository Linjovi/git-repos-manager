import "./Index.css";
import App from "./App";
import createStore from "./store";
import { Provider } from "react-redux";

const store = createStore();

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
  }
}

export default Index;

