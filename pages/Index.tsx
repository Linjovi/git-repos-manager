import './Index.css';
import App from './App';
import createStore from './store';
import { Provider } from 'react-redux';
import Repo from '@/api/repo';

const store = createStore();

import React from 'react';

interface InitialProps {
  query: any;
}

interface Props extends InitialProps {}

class Index extends React.Component<Props> {
  public static getInitialProps({ query }: InitialProps) {
    // console.log("query",query)
    return { query };
  }

  public render() {
    return (
      <Provider store={store}>
        <App root={this.props.query.root} git={this.props.query.git} />
      </Provider>
    );
  }
}

export default Index;
