import React from "react";

class ErrorBoundary extends React.Component {
  state: { hasError: boolean; error: null | Error; info: null | React.ErrorInfo };
  constructor(props: { children: React.ReactChildren }) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      info: null,
    };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    this.setState({
      hasError: true,
      error,
      info,
    });
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return <>{this.props.children}</>;
  }
}
export default ErrorBoundary;
