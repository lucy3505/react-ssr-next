import "../styles/globals.css";
import Layout from "../components/Layout";

import React, { useState } from "react";

// function MyApp({ Component, pageProps }) {
//   const [count, setCount] = useState(0);
//   return (
//     <Layout>
//       {" "}
//       <Component {...pageProps} count={count} setCount={setCount} />
//     </Layout>
//   );
// }

class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      hasError: false,
    };
  }

  componentDidCatch(e, info) {
    this.setState({
      hasError: true,
    });
    console.log("catch error", info);
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Layout>
        {this.state.hasError ? (
          <h1>somthing went wrong</h1>
        ) : (
          <Component
            {...pageProps}
            count={this.state.count}
            setCount={() => this.setState((pre) => ({ count: pre.count + 1 }))}
          />
        )}
      </Layout>
    );
  }
}
export default MyApp;
